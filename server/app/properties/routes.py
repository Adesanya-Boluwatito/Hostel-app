from flask import  request, jsonify,current_app
from werkzeug.utils import secure_filename
from datetime import datetime
from models.properties_model import Property, Image
from models.realtors_model import Realtor
from config import db
from properties import bp
import os
from dotenv import load_dotenv
import uuid  # Import uuid
import firebase_admin
from firebase_admin import credentials, storage

load_dotenv()

cred = credentials.Certificate(os.getenv(r"FIREBASE_SERVICE_ACCOUNT_PATH"))
firebase_admin.initialize_app(cred, {'storageBucket': os.getenv("FIREBASE_STORAGE_BUCKET")})





ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route('/create_property/<realtor_id>', methods=['POST'])
def create_property(realtor_id):
    print(realtor_id)
    realtor_exists = Realtor.query.filter_by(realtor_id=realtor_id).first() is not None
    if not realtor_exists:
        print(realtor_id)
        return jsonify({"error": "Unauthorized user"}), 401

    request_data = None

    if request.headers['Content-Type'] == 'application/json':
        request_data = request.get_json()

    elif request.form:
        request_data = {key: request.form[key] for key in request.form}
    if request_data is None:
        # If not JSON, assume form-data
        return jsonify({"error": "Invalid request format"}), 400
    print(request_data)

    # Create a new property
    new_property = Property(
                            id=str(uuid.uuid4()),
                            owner_id=request_data.get('owner_id'),
                            location=request_data.get('location'),
                            description=request_data.get('description'),
                            address=request_data.get('address'),
                            bedrooms=request_data.get('bedrooms'),
                            bathrooms=request_data.get('bathrooms'),
                            title=request_data.get('title'),
                            category=request_data.get('category'),
                            price=request_data.get('price'),
                            property_type=request_data.get('property_type'),
                            size=request_data.get('size'),
                            active=request_data.get('active', True),
                            date_created=datetime.utcnow())

    try:
        db.session.add(new_property)
        db.session.commit()

    # Handle file upload
        file = request.files.get('file')
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            # file.save(os.path.join(current_app.config['UPLOAD_FOLDER'], filename))
            bucket = storage.bucket()
            blob = bucket.blob(f'property_images/{new_property.id}/{filename}')
            blob.upload_from_string(file.read(), content_type=file.content_type)

            new_image = Image(
                property_id=new_property.id,
                filename=filename,
                storage_url=blob.public_url 
            )

            db.session.add(new_image)
            db.session.commit()

        return jsonify({"message": "Property created successfully"}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
