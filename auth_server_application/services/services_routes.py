from flask import Blueprint, jsonify
from sqlalchemy.exc import IntegrityError

from ..decorators import *
from ..models import *
from ..schema import ServicesSchema

services_bp = Blueprint('services_bp', __name__)


@services_bp.route('/dashboard/services', methods=['GET', 'POST'])
@required_login
@required_admin
def services(user=None):
    if request.method == 'POST':
        data = request.get_json()

        new_service_data = dict(
            service_name=data['service_name'],
            creator_id=user,
            connection_ip=data['connection_ip']
        )
        new_service = Services(**new_service_data)
        db.session.add(new_service)
        try:
            db.session.commit()
        except IntegrityError as e:
            return jsonify(message="service with provided data already exist", error_message=str(e.orig)), 403
        return jsonify(message='service - {} has been created'.format(new_service.service_name)), 201
    else:
        services_list = Services.query.all()
        services_schema = ServicesSchema(many=True)
        return jsonify({'services': services_schema.dump(services_list)}), 200


@services_bp.route('/dashboard/services/<service_name>', methods=['GET', 'PUT', 'DELETE'])
@required_login
@required_admin
def service(user=None, service_name=None):
    if request.method == 'PUT':
        data = request.get_json()
        service_data = Services.query.filter_by(service_name=service_name).first()
        service_data.service_name = data['service_name']
        service_data.creator_id = user.id
        service_data.connection_ip = data['connection_ip']
        service_data.created_data = datetime.now
        try:
            db.session.commit()
        except IntegrityError as e:
            return jsonify(message="db error", error_message=str(e.orig)), 403
        return jsonify(message='service - {} has been changed'.format(service_data.service_name))
    elif request.method == 'DELETE':
        service_data = Services.query.filter_by(service_name=service_name).first()
        if service_name == None:
            return jsonify(message="service doesn't exist"), 400
        db.session.delete(service_data)
        db.session.commit()
        return jsonify(message='service - {} has been deleted'.format(service_data.service_name)), 200
    else:
        service_data = Services.query.filter_by(service_name=service_name).first()
        return jsonify(service_data), 200
