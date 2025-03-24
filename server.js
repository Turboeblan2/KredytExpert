const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/chat', async (req, res) => {
    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                messages: req.body.messages,
                model: req.body.model,
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.json(response.data.choices[0].message);
    } catch (error) {
        console.error('Błąd OpenRouter API:', error);
        if (error.response) {
            console.error('Odpowiedź API OpenRouter:', error.response.data);
        }
        res.status(500).json({ error: 'Wystąpił błąd podczas komunikacji z OpenRouter API.' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});