import os

import jwt


def create_jwt(username, email):
    private_key = os.environ.get('private_key')
    token = jwt.encode({'some': 'payload'}, private_key, algorithm='RS256')
    return token
