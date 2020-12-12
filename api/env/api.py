import time
from flask import Flask

app = Flask(__name__)

@app.route('/data')
def get_current_time():
    return {'data': ",".join(["one", "two", "three"])}