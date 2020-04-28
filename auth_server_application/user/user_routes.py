from flask import Blueprint, request, jsonify
from sqlalchemy.exc import IntegrityError
from werkzeug.security import generate_password_hash

from ..decorators import required_login
from ..models import User, db

user_bp = Blueprint('user_bp', __name__)


@user_bp.route('/dashboard/signup', methods=['POST'])
def signup():
    data = request.get_json()

    new_user_data = dict(
        username=data['username'],
        email=data['email'],
        password_hash=generate_password_hash(data['password'], method='sha256'))
    new_user = User(**new_user_data)
    db.session.add(new_user)
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="user with provided credentials already exist", error_message=str(e.orig)), 403
    return jsonify(message="user - {} has been created".format(data['username'])), 201


@user_bp.route('/dashboard/user', methods=['GET'])
@required_login
def user_options(user):
    user_data = dict(username=user.username, email=user.email, role=user.role, id=user.id,
                     created_date=user.created_date, superuser=user.superuser, is_banned=user.is_banned)
    return jsonify(user_data), 200


@user_bp.route('/dashboard/user/change_password', methods=['PUT'])
@required_login
def user_change_pass(user):
    data = request.get_json()
    user.password_hash = generate_password_hash(data['new_password'], method='sha256')
    db.session.commit()
    return jsonify(message="User = {} password has been updated".format(user.username)), 200


@user_bp.route('/dashboard/user/change_email', methods=['PUT'])
@required_login
def user_change_email(user):
    data = request.get_json()
    user.email = data['new_email']
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="provided email already exist", error_message=str(e.orig)), 403
    return jsonify(message="User = {} email has been updated".format(user.username)), 200


@user_bp.route('/dashboard/user/self_delete', methods=['DELETE'])
@required_login
def user_delete_account(user):
    db.session.delete(user)
    db.session.commit()
    return jsonify(message="user - {} has been deleted".format(user.username)), 200


@user_bp.route('/dasboard/user/force_password_change', methods=['PUT'])
def user_force_password_change():
    data = request.get_json()
    username, email, password = data['username'], data['email'], data['password']
    user_username = User.query.filter_by(username=username).first()
    user_email = User.query.filter_by(email=email).first()
    if user_username is user_email:
        user_username.password_hash = generate_password_hash(password['password'], method='sha256')
        user_username.force_password_change = False
        try:
            db.session.commit()
        except IntegrityError as e:
            return jsonify(message="db error", error_message=str(e.orig)), 403
        return jsonify(message='password for user - {} has been changed'.format(user_username.username))
    else:
        return jsonify(message='provided username and email not connected with same account'), 401
