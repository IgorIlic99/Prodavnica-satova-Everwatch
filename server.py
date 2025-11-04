from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app) 

DATA_FILE = 'message.json'

@app.route('/posalji_poruku', methods=['POST'])
def posalji_poruku():
    data = request.get_json()

    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump([], f, ensure_ascii=False, indent=4)

    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        message = json.load(f)

    message.append(data)

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(message, f, ensure_ascii=False, indent=4)

    return jsonify({'status': 'success', 'message': 'Poruka sačuvana!'})


if __name__ == '__main__':
    app.run(debug=True)
