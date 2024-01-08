from flask import jsonify, request, session, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, current_user, logout_user



main_bp = Blueprint('main', __name__)

from app.app import db, login_manager
from app.models import User
from app.utils import send_OTP, verify_otp



@main_bp.route('/register', methods=["POST"])
def register():
    if request.method == "POST":
        email = request.json["email"]
        name = request.json['name']
        password_text = request.json['password']
        # retry_password = request.json["retry-password"]


        if password_text is not None:
            password = generate_password_hash(password_text, method='pbkdf2', salt_length=8)



        user_exists = User.query.filter_by(email=email).first() is not None
        if user_exists:
            return jsonify({"error": "User already exists"}), 409

        
        new_user = User(email=email, name=name, password=password)
        db.session.add(new_user)
        db.session.commit()


        session["user_id"] = new_user.id
        return jsonify({
            "id": new_user.id,
            "email": new_user.email
        })

       

@main_bp.route('/login', methods=["POST"])
def login():
    if request.method == "POST":
        email = request.json['email']
        password = request.json['password']

        user = User.query.filter_by(email=email).first()

        if user and check_password_hash(user.password, password):
            send_OTP(email)
            login_user(user)
            return jsonify({"success": True, "message": "Login successful"})
        else:
            return jsonify({"success": False, "message": "Invalid email or password"})



@main_bp.route('/check_OTP', methods=["POST"])
@login_required
def check_OTP():
    if request.method == "POST":
        entered_otp = request.form.get("otp")
        if verify_otp(entered_otp):
            return jsonify({"success": True, "message": "OTP verification successful"})
        else:
            return jsonify({"success": False, "message": "Invalid OTP"})

@main_bp.route('/@me')
@login_required
def secrets():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({"name": current_user.name})




@main_bp.route('/logout', methods=['POST'])
def logout():
    session.pop("user_id")
    return "200"




















