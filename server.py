from flask import  Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
from datetime import datetime
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

konekcija = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="everwatchprodavnica"
)

cursor = konekcija.cursor()

@app.route('/')
def home():
    return render_template('index.html', )

@app.route('/watches')
def watches():
    return render_template('watches.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/ordering')
def ordering():
    return render_template('ordering.html')

@app.route('/orders')
def orders():
    return render_template('orders.html')

@app.route('/posalji_narudzbinu', methods=['POST'])
def naruci_proizvode():

    orders = request.get_json()  

    cursorDodaj = konekcija.cursor(dictionary=True)

    valueInsert_list = []

    valueInsert_list.append(orders['datum'])

    valueInsert_list.append(orders['kontakt_informacije']['broj_telefona'])
    valueInsert_list.append(orders['kontakt_informacije']['email'])

    adresa_i = orders['adresa_za_isporuku']
    valueInsert_list.append(adresa_i['ime'])
    valueInsert_list.append(adresa_i['prezime'])
    valueInsert_list.append(adresa_i['grad'])
    valueInsert_list.append(adresa_i['naselje'])
    valueInsert_list.append(adresa_i['adresa'])
    valueInsert_list.append(adresa_i['postanski_broj'])
    valueInsert_list.append(adresa_i['okrug'])

    adresa_n = orders['adresa_za_naplatu']
    valueInsert_list.append(adresa_n['ime'])
    valueInsert_list.append(adresa_n['prezime'])
    valueInsert_list.append(adresa_n['grad'])
    valueInsert_list.append(adresa_n['naselje'])
    valueInsert_list.append(adresa_n['adresa'])
    valueInsert_list.append(adresa_n['postanski_broj'])
    valueInsert_list.append(adresa_n['okrug'])

    valueInsert_list.append(orders['napomena'])
    valueInsert_list.append(json.dumps(orders['proizvodi']))
    valueInsert_list.append(orders['ukupna_cena'])

    valueInsert = tuple(valueInsert_list)

    upitDodaj = "INSERT INTO `orders`(`datum`, `kontakt_informacije.broj_telefona`, `kontakt_informacije.email`, `adresa_za_isporuku.ime`, `adresa_za_isporuku.prezime`, `adresa_za_isporuku.grad`, `adresa_za_isporuku.naselje`, `adresa_za_isporuku.adresa`, `adresa_za_isporuku.postanski_broj`, `adresa_za_isporuku.okrug`, `adresa_za_naplatu.ime`, `adresa_za_naplatu.prezime`, `adresa_za_naplatu.grad`, `adresa_za_naplatu.naselje`, `adresa_za_naplatu.adresa`, `adresa_za_naplatu.postanski_broj`, `adresa_za_naplatu.okrug`, `napomena`, `proizvodi`, `ukupna_cena`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    cursorDodaj.execute(upitDodaj, valueInsert)
    
    konekcija.commit()

    return {'status': 'success', 'message': 'Podaci primljeni. Spreman za upis u bazu.'}, 200

@app.route('/posalji_poruku', methods=['POST'])
def submit():
    if request.method == 'POST':
        ime = request.form['ime']
        prezime = request.form['prezime']
        broj_telefona = request.form['broj-telefona']
        email = request.form['e-mail']
        poruka = request.form['poruka']
        datum = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        cursor.execute("INSERT INTO `message`(`ime`, `prezime`, `broj_telefona`, `email`, `poruka`, `datum`) VALUES (%s, %s, %s, %s, %s, %s)", (ime, prezime, broj_telefona, email, poruka, datum))
        konekcija.commit()

        return redirect(url_for('contact'))
    
@app.route('/api/products', methods=['GET'])
def get_products_json():
    
    if not konekcija.is_connected():
        return jsonify({'error': 'Greška konekcije sa bazom podataka.'}), 500
        
    try:
        cursorPrikazi = konekcija.cursor(dictionary=True)
        upitPrikazi = "SELECT * FROM products"
        cursorPrikazi.execute(upitPrikazi)
        
        rezultati = cursorPrikazi.fetchall()
        cursorPrikazi.close()

        return jsonify(rezultati) 

    except mysql.connector.Error as err:
        print(f"SQL Greška: {err}")
        return jsonify({'error': f'Greška pri izvršavanju SQL upita: {err}'}), 500
    except Exception as e:
        print(f"Neočekivana greška: {e}")
        return jsonify({'error': f'Serverska greška: {e}'}), 500

if __name__ == '__main__':
    app.run(debug=True)