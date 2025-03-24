const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Użyj modelu chatowego
            messages: [{ role: 'user', content: req.body.message }],
            max_tokens: 150,
        });

        res.json({ message: response.choices[0].message.content.trim() });
    } catch (error) {
        console.error('Błąd OpenAI API:', error);
        res.status(500).json({ error: 'Wystąpił błąd podczas komunikacji z OpenAI API.' });
    }
});

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});