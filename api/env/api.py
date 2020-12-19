import time
from flask import *

app = Flask(__name__)

@app.route('/data', methods=["GET", "POST"])
def get_current_time():
    if request.method=="POST":
        print("========================YIIIIE we got it")
    return {'data': ",".join(["one", "two", "three"])}

