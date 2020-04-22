from flask import Blueprint, jsonify, request
from sqlalchemy.exc import IntegrityError

from ..decorators import required_login, required_admin, required_superadmin
from ..models import User, db

admin_bp = Blueprint('admin_bp', __name__, template_folder='templates', static_folder='static')


@admin_bp.route('/dashboard/admin', methods=['GET'])
@required_login
@required_admin
def admin(user=None):
    users = User.query.filter(User.role.isnot(True)).all()
    for user in users:
        user_dict = {user.id: {'username': user.username, 'email': user.email,
                               'created_date': user.created_date, 'is_banned': user.is_banned,
                               'force_password_change': user.force_password_change}}
    return jsonify(users_list=user_dict), 200


@admin_bp.route('/dashboard/admin/user/<username>/give_privileges', methods=['GET'])
@required_login
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


@admin_bp.route('/dashboard/admin/user/<username>/change_email', methods=['POST'])
@required_login
@required_admin
def admin_user_change_email(username):
    data = request.get_json()
    new_email = data['new_email']
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify(message="No account with provided username - {}".format(username)), 409
    user.email = new_email
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="db error", error_message=str(e.orig)), 400
    return jsonify(message='email for user - {} has been changed'.format(user.username)), 200


@admin_bp.route('/dashboard/admin/user/<username>/delete_account', methods=['GET'])
@required_login
@required_admin
def admin_user_delete_account(username):
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify(message="No account with provided username - {}".format(username)), 409
    db.session.delete(user)
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="db error", error_message=str(e.orig)), 400
    return jsonify(message='user - {} has been deleted'.format(user.username)), 200


@admin_bp.route('/dashboard/admin/user/<username>/ban_user', methods=['GET'])
@required_login
@required_admin
def admin_user_ban_user(username):
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify(message="No account with provided username - {}".format(username)), 409
    user.is_banned = True
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="db error", error_message=str(e.orig)), 400
    return jsonify(message='user - {} is banned now'.format(user.username)), 200


@admin_bp.route('/dashboard/admin/user/<username>/unban_user', methods=['GET'])
@required_login
@required_admin
def admin_user_unban_user(username):
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify(message="No account with provided username - {}".format(username)), 409
    user.is_banned = False
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="db error", error_message=str(e.orig)), 400
    return jsonify(message='user - {} is unbanned now'.format(user.username)), 200


@admin_bp.route('/dashboard/admin/user/<username>/force_password_change', methods=['GET'])
@required_login
@required_admin
def admin_user_force_password_change(username):
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify(message="No account with provided username - {}".format(username)), 409
    user.force_password_change = True
    try:
        db.session.commit()
    except IntegrityError as e:
        return jsonify(message="db error", error_message=str(e.orig)), 400
    return jsonify(message='user - {} now need to change password before login'.format(user.username)), 200


@admin_bp.route(('/dashboard/admin/services'), methods=['GET', 'POST'])
@required_login
@required_admin
def admin_service():
    request.url()
