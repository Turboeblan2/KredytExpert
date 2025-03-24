    const express = require('express');
    const bodyParser = require('body-parser');
    const { Configuration, OpenAIApi } = require('openai');

    const app = express();
    app.use(bodyParser.json());
    OPENAI_API_KEY = "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"
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Klucz API OpenAI z zmiennej środowiskowej
    });
    const openai = new OpenAIApi(configuration);

    app.post('/chat', async (req, res) => {
    try {
    const response = await openai.createCompletion({
    model: 'text-davinci-003', // Model OpenAI
    prompt: req.body.message, // Wiadomość od użytkownika
    max_tokens: 150, // Maksymalna długość odpowiedzi
    });

    res.json({ message: response.data.choices[0].text.trim() });
    } catch (error) {
    console.error('Błąd OpenAI API:', error);
    res.status(500).json({ error: 'Wystąpił błąd.' });
    }
    });

    app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
    });