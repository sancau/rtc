# -*- coding: utf-8 -*-

import json

from flask import Flask, request
from flask_cors import CORS

from temperature_mode_handler import TemperatureModeHandler

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
def handle():
    if request.method == 'POST':
        print(type(request.data))
        print(type(request.get_json(force=True)))

        payload = request.get_json(force=True)
        handler = TemperatureModeHandler()
        result = handler.handle(payload)
        return json.dumps(result)

if __name__ == '__main__':
    app.run()
