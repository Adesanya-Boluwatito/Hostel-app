from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin


from app.app import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    otp_secret = db.Column(db.String(16))




