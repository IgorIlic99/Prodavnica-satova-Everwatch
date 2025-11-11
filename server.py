from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app) 

#---------------------- Kontakt Forma -----------------------

MESSAGES_FILE  = 'message.json'

@app.route('/posalji_poruku', methods=['POST'])
def posalji_poruku():
    data = request.get_json()

    if not os.path.exists(MESSAGES_FILE ):
        with open(MESSAGES_FILE , 'w', encoding='utf-8') as f:
            json.dump([], f, ensure_ascii=False, indent=4)

    with open(MESSAGES_FILE , 'r', encoding='utf-8') as f:
        message = json.load(f)

    message.append(data)

    with open(MESSAGES_FILE , 'w', encoding='utf-8') as f:
        json.dump(message, f, ensure_ascii=False, indent=4)

    return jsonify({'status': 'success', 'message': 'Poruka sačuvana!'})

@app.route('/poruke', methods=['GET'])
def prikazi_poruke():
    if not os.path.exists(MESSAGES_FILE):
        return jsonify([])

    with open(MESSAGES_FILE, 'r', encoding='utf-8') as f:
        messages = json.load(f)

    return jsonify(messages)

# http://localhost:5000/poruke

# ------------------ Forma za narudžbinu -------------------

ORDERS_FILE  = 'orders.json'

@app.route('/posalji_narudzbinu', methods=['POST'])
def naruci_proizvode():
    data = request.get_json()

    if not os.path.exists(ORDERS_FILE ):
        with open(ORDERS_FILE , 'w', encoding='utf-8') as f:
            json.dump([], f, ensure_ascii=False, indent=4)

    with open(ORDERS_FILE , 'r', encoding='utf-8') as f:
        orders = json.load(f)

    orders.append(data)

    with open(ORDERS_FILE , 'w', encoding='utf-8') as f:
        json.dump(orders, f, ensure_ascii=False, indent=4)

    return jsonify({'status': 'success', 'message': 'Narudžbina uspešno sačuvana!'})

@app.route('/narudzbine', methods=['GET'])
def prikazi_narudzbine():
    if not os.path.exists(ORDERS_FILE):
        return jsonify([])

    with open(ORDERS_FILE, 'r', encoding='utf-8') as f:
        orders = json.load(f)

    return jsonify(orders)

# http://localhost:5000/narudzbine

#----------------------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)
