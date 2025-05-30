// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const haslo = document.getElementById('haslo').value;
    // Tutaj dodasz kod obsługujący logowanie (wysyłanie danych do backendu)
    console.log('Logowanie:', email, haslo);
    // Przykładowe przekierowanie po zalogowaniu
    window.location.href = 'panel-uzytkownika.html';
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