import os

from flask import Blueprint, jsonify

from ..decorators import required_login
from ..utilities import create_jwt

jwt_rest_bp = Blueprint('jwt_rest_bp', __name__)


@jwt_rest_bp.route('/api/v1/user', methods=['GET'])
@required_login
def jwt(user):
    username = user.username
    email = user.email
    token = create_jwt(username, email)
    return jsonify(token=token.decode('utf-8')), 200


@jwt_rest_bp.route('/api/v1/service_get_pub', methods=['GET'])
def get_pub():
    pub = os.environ.get('public_key')
    return jsonify(pub=pub), 200
