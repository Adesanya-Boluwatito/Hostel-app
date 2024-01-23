from flask_login import UserMixin

from config import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    otp_secret = db.Column(db.String(16))

    @property
    def is_realtor(self):
        return hasattr(self, 'realtor') and self.realtor is not None