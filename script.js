
document.getElementById('ofertyButton').addEventListener('click', function() {
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