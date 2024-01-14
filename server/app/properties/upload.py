import pyrebase


config = {
    "apiKey": "AIzaSyBnZQWPBgGu6u38G2888Y5SLCQ0cC5FuPU",
  "authDomain": "real-auth-60301.firebaseapp.com",
  "projectId": "real-auth-60301",
  "storageBucket": "real-auth-60301.appspot.com",
  "messagingSenderId": "548397076452",
  "appId": "1:548397076452:web:985f4439e94e64380a81f1",
  "measurementId": "G-87PZVGYNVF",
  "serviceAccount":r"server\app\properties\serviceAccount.json",
  "databaseURL": "https://real-auth-60301-default-rtdb.firebaseio.com/"
}



firebase = pyrebase.initialize_app(config)