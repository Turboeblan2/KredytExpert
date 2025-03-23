document.getElementById('ofertyButton').addEventListener('click', function () {
    window.location.href = '/podstrony/oferty.html';
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
        }, 300); // Opóźnij ukrycie chatbota o czas trwania animacji
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

    function sendMessage() {
    const message = chatInput.value;
    if (!message) return;

    appendMessage('Ty', message);
    chatInput.value = '';

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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', // Zastąp YOUR_OPENAI_API_KEY swoim kluczem API
        },
        body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        }),
        })
        .then(response => {
        if (!response.ok) {
        throw new Error(`Błąd HTTP! status: ${response.status}`);
        }
        return response.json();
        })
        .then(data => {
        const reply = data.choices[0].message.content.trim();
        appendMessage('Chatbot', reply);
        })
        .catch(error => {
        console.error('Błąd API OpenAI:', error);
        appendMessage('Chatbot', 'Przepraszam, wystąpił błąd.');
        });

    function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    }}