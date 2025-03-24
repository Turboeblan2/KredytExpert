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

chatSend.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = chatInput.value;
    if (!message) return;

    appendMessage('user', message);
    chatInput.value = '';

    const messages = [];
    const messageElements = chatMessages.querySelectorAll('.message');
    messageElements.forEach((element) => {
        const role = element.classList.contains('user') ? 'user' : 'bot';
        messages.push({ role, content: element.textContent });
    });

    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages, model: 'openai/gpt-3.5-turbo' }),
        });

        const data = await response.json();
        appendMessage('bot', data.content); // Dodaj odpowiedź AI do historii
    } catch (error) {
        console.error('Błąd podczas wysyłania wiadomości:', error);
        appendMessage('bot', 'Wystąpił błąd.');
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}