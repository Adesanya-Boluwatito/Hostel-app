from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from datetime import datetime
from models.properties_model import Property, Image
from models.realtors_model import Realtor
from config import db
from properties import bp
import os
import uuid  # Import uuid

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route('/create_property', methods=['POST'])
def create_property():
    # user = Realtor.query.get(realtor_id)
    # if user is None:
    #     return jsonify("Unauthorized user"), 401

    request_data = request.get_json()

    # Create a new property
    new_property = Property(
                            owner_id=request_data['owner_id'],
                            location=request_data['location'],
                            description=request_data['description'],
                            # property_images=request_data.get('property_images', []),
                            address=request_data['address'],
                            bedrooms=request_data['bedrooms'],
                            bathrooms=request_data['bathrooms'],
                            title=request_data['title'],
                            category=request_data['category'],
                            price=request_data['price'],
                            property_type=request_data['property_type'],
                            size=request_data['size'],
                            active=request_data.get('active', True),
                            date_created=datetime.utcnow())

    try:
        db.session.add(new_property)
        db.session.commit()

        # Handle file upload
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(bp.config['UPLOAD_FOLDER'], filename))

            new_image = Image(
                property_id=new_property.id,
                filename=filename
            )

            db.session.add(new_image)
            db.session.commit()

        return jsonify({"message": "Property created successfully"}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
