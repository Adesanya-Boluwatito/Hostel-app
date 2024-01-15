from flask import jsonify, request
from flask_login import login_required, current_user
# from models.users_model import User
from models.realtors_model import Realtor
from config import db
from realtors import bp
import uuid




@bp.post('/realtor/register_profile')
# @login_required
def register_realtor():
    request_data = request.get_json()
    new_realtor = Realtor(id=str(uuid.uuid4()),
                          realtor_id=request_data['user_id'],
                          company_name=request_data['company_name'],
                          description=request_data['description'],
                          profile_picture=request_data['profile_picture'],
                          company_mail=request_data['company_mail'],
                          website_url=request_data['website_url'],
                          contact=request_data['contact'])
                           

    try:
        db.session.add(new_realtor)
        db.session.commit()
        return jsonify(new_realtor.serialize()), 201
    except Exception as e:
        print(e)
        db.session.rollback()
        return "An error occured!", 500