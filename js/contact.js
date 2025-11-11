//------------------------ Contact Form ----------------------------

document.querySelector('.contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        ime: this.querySelector('input[name="ime"]').value,
        prezime: this.querySelector('input[name="prezime"]').value,
        broj_telefona: this.querySelector('input[name="broj-telefona"]').value,
        email: this.querySelector('input[name="e-mail"]').value,
        poruka: this.querySelector('textarea[name="poruka"]').value,
        datum: new Date().toISOString()
    };

    const response = await fetch("http://localhost:5000/posalji_poruku", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert('Poruka je uspešno poslata!');
        this.reset();
    } else {
        alert('Došlo je do greške pri slanju poruke.');
    }
});
