# app.py
import os
from flask import Flask, request
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from firebase_admin import credentials, initialize_app, auth
from pyparsing import wraps



app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret-key-goes-here'
app.static_folder = 'static'


# CONNECT TO DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Boluwatito@localhost/real_estate_app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

login_manager = LoginManager(app)



cred = credentials.Certificate(os.getenv('path'))
initialize_app(cred)

with app.app_context():
    db.create_all()

# Import routes, models, and utils

from app.routes import main_bp
app.register_blueprint(main_bp)

@login_manager.user_loader
def load_user(user_id):
    from app.models import User
    return User.query.get(int(user_id))



def authenticate_user(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if not request.headers.get('Authorization'):
            return {'message': 'No token provided'}, 400
        try:
            user = auth.verify_id_token(request.headers['Authorization'])
            request.user = user
        except auth.InvalidIdTokenError as e:
            print(e)
            return {'message': 'Invalid token provided.'}, 400
        return f(*args, **kwargs)
    return wrap