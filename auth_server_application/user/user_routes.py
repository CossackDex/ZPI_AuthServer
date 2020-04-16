
from flask import Blueprint, request, jsonify
from sqlalchemy.exc import IntegrityError
from werkzeug.security import generate_password_hash

from ..decorators import login_required
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
@login_required
def user_options(user):
    user_data = dict(username=user.username, email=user.email)
    return jsonify(user_data), 201


@user_bp.route('/dashboard/user/change_password', methods=['PUT'])
@login_required
def user_change_pass(user):
    data = request.get_json()
    user.password_hash = generate_password_hash(data['new_password'], method='sha256')
    db.session.commit()
    return jsonify(message="User = {} password has been updated".format(user.username)), 200


@user_bp.route('/dashboard/user/change_email', methods=['PUT'])
@login_required
def user_change_email(user):
    data = request.get_json()
    user.email = data['new_email']
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="provided email already exist", error_message=str(e.orig)), 403
    return jsonify(message="User = {} email has been updated".format(user.username)), 200
