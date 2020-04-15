# Flask imports
import os
# 3-rd part imports
from uuid import uuid4

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_talisman import Talisman
from werkzeug.security import generate_password_hash

# Globally accessible libraries

db = SQLAlchemy()


def create_app():
    """ Initialize the core application """
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')

    # Init Plugs
    db.init_app(app)
    # Talisman(app)  # FIXME place to enable https only connection
    from .models import User  # TODO Why i need to import this piece of shit

    with app.app_context():
        # Include essential parts
        from .admin import admin_routes
        from .rest_jwt import jwt_rest_routes
        from .user import user_routes
        # Can i put this here
        # from .models import User

        # Register Blueprints
        app.register_blueprint(admin_routes.admin_bp)
        app.register_blueprint(jwt_rest_routes.jwt_rest_bp)
        app.register_blueprint(user_routes.user_bp)
        db.drop_all()
        db.create_all()

        # create superuser
        username = os.environ.get('superuser_nickname')
        email = os.environ.get('superuser_email')
        public_id = str(uuid4())
        role = True
        superuser = True
        password_hash = generate_password_hash(os.environ.get('superuser_password'))
        superuser = User(public_id=public_id, username=username, email=email, role=role, superuser=superuser,
                         password_hash=password_hash)
        db.session.add(superuser)
        db.session.commit()

        return app
