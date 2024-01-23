import firebase_admin
from firebase_admin import credentials, storage
from dotenv import load_dotenv

import os



load_dotenv()

cred = credentials.Certificate(os.getenv(r"FIREBASE_SERVICE_ACCOUNT_PATH"))
firebase_admin.initialize_app(cred, {'storageBucket': os.getenv("FIREBASE_STORAGE_BUCKET")})