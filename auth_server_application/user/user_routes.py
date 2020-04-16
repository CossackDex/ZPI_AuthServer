from uuid import uuid4

from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash

from ..decorators import login_required
from ..models import User, db

user_bp = Blueprint('user_bp', __name__)


# @user_bp.route('/dashboard/login', methods=['GET', 'POST'])
# def login():
#     return False  # FIXME
#
#
@user_bp.route('/dashboard/signup', methods=['POST'])
def signup():
    data = request.get_json()

    new_user_data = dict(public_id=str(uuid4()),
                         username=data['username'],
                         email=data['email'],
                         password_hash=generate_password_hash(data['password'], method='sha256'))
    new_user = User(**new_user_data)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(message="user - {} has been created".format(data['username'])), 201


@user_bp.route('/dashboard/user', methods=['GET'])
@login_required
def user_options(user):
    user_data = dict(username=user.username, email=user.email)
    return jsonify(user_data), 201

#
# @user_bp.route('/dashboard/user/change_password', methods=['GET', 'POST'])
# def user_change_pass():
#     return False  # FIXME
#
#
# @user_bp.route('/dashboard/user/change_email', methods=['GET', 'POST'])
# def user_change_email():
#     return False  # FIXME
