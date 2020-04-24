from datetime import datetime

from . import db


class User(db.Model):
    __tablename__ = "user_data_auth"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    role = db.Column(db.Boolean, nullable=False, default=False)
    superuser = db.Column(db.Boolean, nullable=False, default=False)
    password_hash = db.Column(db.String(256), nullable=False, unique=False)
    is_banned = db.Column(db.Boolean, nullable=False, unique=False, default=False)
    force_password_change = db.Column(db.Boolean, nullable=False, unique=False, default=False)
    created_date = db.Column(db.DateTime, default=datetime.now)
    services = db.relationship('Services', backref='service', lazy=True)

    def __init__(self, role=False, superuser=False, **kwargs):
        self.username = kwargs['username']
        self.email = kwargs['email']
        self.password_hash = kwargs['password_hash']
        self.role = role
        self.superuser = superuser

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Services(db.Model):
    __tablename__ = "Services list"
    id = db.Column(db.Integer, primary_key=True)
    service_name = db.Column(db.String(80), unique=True, nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    connection_ip = db.Column(db.String(250), unique=False, nullable=False)
    created_date = db.Column(db.DateTime, default=datetime.now)

    def __init__(self, **kwargs):
        self.service_name = kwargs['service_name']
        self.creator_id = kwargs['user'].id
        self.connection_ip = kwargs['connection_ip']

    def __repr__(self):
        return {'id': self.id, 'service_name': self.service_name, 'creator_id': self.creator_id,
                'connection_ip': self.connection_ip, 'created_date': self.created_date}
