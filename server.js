const express = require('express');
    const bodyParser = require('body-parser');
    const { MongoClient } = require('mongodb');

    const app = express();
    app.use(bodyParser.json());

    const uri = "mongodb://127.0.0.1:27017/kredytexpert"; // Adres URI MongoDB
    const client = new MongoClient(uri);

    async function connectToDatabase() {
    try {
    await client.connect();
    console.log("Połączono z MongoDB");
    return client.db();
    } catch (e) {
    console.error(e);
    }
    }

    app.post('/register', async (req, res) => {
    const db = await connectToDatabase();
    if (!db) {
    return res.status(500).json({ success: false, message: 'Błąd połączenia z bazą danych.' });
    }

    const users = db.collection('users');
    const user = {
    firstName: req.body.imie,
    lastName: req.body.nazwisko,
    email: req.body.email,
    password: req.body.haslo,
    registrationDate: new Date(),
    };

    try {
    await users.insertOne(user);
    res.json({ success: true, message: 'Rejestracja pomyślna.' });
    } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Błąd rejestracji.' });
    }
    });

    app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
    });