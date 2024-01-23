from flask import jsonify, request, session
from flask_login import login_required, current_user
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash
from models.realtors_model import Realtor
from config import db
from realtors import bp
import uuid
from credentials import *





ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@bp.route('/realtor/register_profile', methods=['POST'])
@login_required
def register_realtor():

    # Check if the logged-in user is not a realtor

    request_data = None

    if request.headers['Content-Type'] == 'application/json':
        request_data = request.get_json()

    elif request.form:
        request_data = {key: request.form[key] for key in request.form}
    if request_data is None:
        # If not JSON, assume form-data
        return jsonify({"error": "Invalid request format"}), 400
    
    profile_picture = request.files.get('profile_picture')

    if 'profile_picture' not in request.files or not allowed_file(profile_picture.filename):
        return "Invalid file or missing file in the request", 400

   



    new_realtor = Realtor(id=str(uuid.uuid4()),
                          realtor_id=request_data['realtor_id'],
                          company_name=request_data['company_name'],
                          description=request_data['description'],
                          profile_picture='',
                          company_mail=request_data['company_mail'],
                          website_url=request_data['website_url'],
                          contact=request_data['contact'],
                          user_id=current_user.id)

                           
    filename = secure_filename(profile_picture.filename)

        # Upload the file to Firebase Storage
    bucket = storage.bucket()
    blob = bucket.blob(f'realtor_images/{new_realtor.id}/{filename}')
    blob.upload_from_string(profile_picture.read(), content_type=profile_picture.content_type)

    # Get the public URL of the uploaded file
    file_url = blob.public_url

    new_realtor.profile_picture = file_url


    try:
        db.session.add(new_realtor)
        db.session.commit()
        return jsonify(new_realtor.serialize()), 201
    except Exception as e:
        print(e)
        db.session.rollback()
        return "An error occured!", 500
    



# bp.route('realtor/delete_profile_picture/<realtor_id>', methods= ['POST'])
# def delete_profile_picture():
#     try:
        
#         realtor
    

@bp.route('/realtor/delete_profile_picture', methods=['POST'])
@login_required
def delete_profile_picture():
    try:
        # Fetch the logged-in realtor
        realtor = Realtor.query.filter_by(user_id=current_user.id).first()

        if not realtor:
            return jsonify({"error": "Realtor not found"}), 404

        # Delete image from Firebase Storage
        if realtor.profile_picture:
            bucket = storage.bucket()
            blob = bucket.blob(realtor.profile_picture)
            blob.delete()

        # Update the realtor's profile_picture field in the database
        realtor.profile_picture = ''

        db.session.commit()
        return jsonify({"message": "Profile picture deleted successfully"}), 200

    except Exception as e:
        print(e)
        db.session.rollback()
        return jsonify({"error": "An error occurred while deleting the profile picture"}), 500