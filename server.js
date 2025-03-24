const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai'); // Importuj OpenAI

const app = express();
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Klucz API OpenAI z zmiennej środowiskowej
});

app.post('/chat', async (req, res) => {
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003', // Model OpenAI
      prompt: req.body.message, // Wiadomość od użytkownika
      max_tokens: 150, // Maksymalna długość odpowiedzi
    });

    res.json({ message: response.choices[0].text.trim() });
  } catch (error) {
    console.error('Błąd OpenAI API:', error);
    res.status(500).json({ error: 'Wystąpił błąd.' });
  }
});

app.listen(3000, () => {
  console.log('Serwer działa na porcie 3000');
});