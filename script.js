document.getElementById('ofertyButton').addEventListener('click', function () {
    window.location.href = 'podstrony/oferty.html';
});

const chatBar = document.querySelector('.chat-bar');
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

chatBar.addEventListener('click', () => {
    if (chatContainer.classList.contains('active')) {
        chatContainer.classList.remove('active');
        chatContainer.classList.add('closing');
        setTimeout(() => {
            chatContainer.classList.remove('closing');
            chatContainer.style.display = 'none';
        }, 300);
    } else {
        chatContainer.classList.add('active');
        chatContainer.style.display = 'block';
    }
});

async function sendMessage(messages, model) {
    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages, model }),
        });

        const data = await response.json();
        return data.content; // Zwraca odpowiedź od AI
    } catch (error) {
        console.error('Błąd podczas wysyłania wiadomości:', error);
        return 'Wystąpił błąd.';
    }
}

// Przykład użycia
const messages = [
    { role: 'user', content: 'Napisz krótkie opowiadanie.' },
];
const model = 'openai/gpt-3.5-turbo'; // Wybierz model z OpenRouter

sendMessage(messages, model)
    .then(response => console.log(response));