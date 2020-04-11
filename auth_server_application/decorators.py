from functools import wraps

from flask import request, make_response
from werkzeug.security import check_password_hash

from .models import User


def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization

        if not auth or not auth.username or not auth.password:
            return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm = credentials required'})
        user = User.query.filter_by(name=auth.username).first()

        if not user:
            return make_response('No account with provided credentials', 401,
                                 {'WWW-Authenticate': 'Basic realm = credentials required'})
        if not check_password_hash(user.password_hash, auth.password):
            return make_response('Wrong password', 401, {'WWW-Authenticate': 'Basic realm = credentials required'})
        return f(user, *args, **kwargs)

    return decorated


def required_admin(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        user = kwargs['user']
        if user.role is False:
            return make_response("Access Denied, User doesn't have admin privileges", 405,
                                 {'WWW-Authenticate': 'Basic realm = credentials required'})
        return f(user, *args, **kwargs)

    return decorated


def required_superadmin(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        user = kwargs['user']
        if user.superuser is False:
            return make_response("Access Denied, User doesn't have superuser privileges", 405,
                                 {'WWW-Authenticate': 'Basic realm = credentials required'})
        return f(user, *args, **kwargs)

    return decorated
