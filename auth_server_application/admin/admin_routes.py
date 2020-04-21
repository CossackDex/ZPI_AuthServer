from flask import Blueprint, jsonify
from sqlalchemy.exc import IntegrityError

from ..decorators import login_required, required_admin, required_superadmin
from ..models import User, db

admin_bp = Blueprint('admin_bp', __name__, template_folder='templates', static_folder='static')


@admin_bp.route('/dashboard/admin', methods=['GET'])
@login_required
@required_admin
def admin(user=None):
    users = User.query.filter(User.role.isnot(True)).all()
    for user in users:
        user_dict = {user.id: {'username': user.username, 'email': user.email, 'role': user.role,
                               'created_date': user.created_date, 'is_banned': user.is_banned}}
    return jsonify(users_list=user_dict), 200


@admin_bp.route('/dashboard/admin/user/<username>/give_privileges', methods=['GET'])
@login_required
@required_admin
@required_superadmin
def admin_user_give_privileges(username):
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify(message="No account with provided username - {}".format(username)), 409
    user.role = True
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="user with provided credentials already exist", error_message=str(e.orig)), 400
    return jsonify(message='privileges granted'), 200


def admin_user_change_email(username):
    return False


def admin_user_delete_account(username):
    return False


def admin_user_ban_user(username):
    return False


def admin_user_unban_user(username):
    return False
