from flask import Blueprint

admin_bp = Blueprint('admin_bp', __name__, template_folder='templates', static_folder='static')

# def required_admin(f):
#     @wraps(f)
#     def decorator(*args, **kwargs):
#         is_admin = False  # FIXME querry correct data
#         if is_admin:
#             return 'Access Granted'  # FIXME
#         else:
#             return 'Access Denied'  # FIXME
#
#     return decorator  # FIXME Why i need to return this
#
#
# def required_superadmin(f):
#     @wraps(f)
#     def decorator(*args, **kwargs):
#         is_superadmin = False  # FIXME querry correct data
#         if is_superadmin:
#             return 'AccessGranted'  # Fixme
#         else:
#             return 'Access Denied'  # FIXMe
#
#     return decorator
#
#
# @required_admin
# @admin_bp.route('/dashboard/admin', methods=['GET'])
# def admin():
#     return False  # FIXME
#
#
# @required_admin
# @admin_bp.route('/dashboard/admin/user/<int:pk>', methods=['GET'])  # FIXME 100% that's not working url bug
# def admin_user_data():
#     return False  # FIXME
#
#
# @required_admin
# @admin_bp.route('/dashboard/admin/user/<int:pk>/ban',
#                 methods=['GET', 'POST'])  # FIXME 100% that url is not working properly
# def admin_user_ban():
#     return False  # FIXME
#
#
# @required_admin
# @admin_bp.route('/dashboard/admin/user/<int:pk>/give_privileges',
#                 methods=['GET', 'POST'])  # FIXME 100% that url is not working properly
# def admin_user_give_privileges():
#     return False  # FIXME
#
#
# @required_admin
# @admin_bp.route('/dashboard/admin/service', methods=['GET', 'POST'])
# def admin_service_list():
#     return False  # FIXME
#
#
# @required_admin
# @admin_bp.route('/dashboard/admin/service/<str:name>',
#                 methods=['GET', 'PUT', 'DELETE'])  # FIXME 100% that url is not working
# def admin_service():
#     return False  # FIXME
