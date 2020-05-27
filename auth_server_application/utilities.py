import os

import jwt


def create_jwt(username, email):
    private_key = os.environ.get('private_key')
    payload = dict(username=username, email=email)
    token = jwt.encode({'some': payload}, private_key, algorithm='RS256')
    return token
