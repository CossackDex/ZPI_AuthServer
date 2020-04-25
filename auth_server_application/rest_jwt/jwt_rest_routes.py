import os

from flask import Blueprint, request

from ..decorators import login_required

jwt_rest_bp = Blueprint('jwt_rest_bp', __name__)


@jwt_rest_bp.route('/api/v1/user', methods=['POST'])
@login_required
def jwt(user=None):
    data = request.get_json()
    private_key = os.environ.get('private_key')

    return False  # FIXME later
