from flask import jsonify, render_template, request, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, current_user, logout_user

from app import app, db, login_manager
from models import User
from utils import send_OTP, verify_otp

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/register', methods=["POST"])
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

       

@app.route('/login', methods=["POST"])
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



@app.route('/check_OTP', methods=["POST"])
@login_required
def check_OTP():
    if request.method == "POST":
        entered_otp = request.form.get("otp")
        if verify_otp(entered_otp):
            return jsonify({"success": True, "message": "OTP verification successful"})
        else:
            return jsonify({"success": False, "message": "Invalid OTP"})

@app.route('/@me')
@login_required
def secrets():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({"name": current_user.name})




@app.route('/logout', methods=['POST'])
def logout():
    session.pop("user_id")
    return "200"