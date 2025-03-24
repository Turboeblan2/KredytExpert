document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const email = document.getElementById('email').value;
    const haslo = document.getElementById('haslo').value;
  
    // Tutaj możesz dodać kod wysyłający dane rejestracji na serwer
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
  
  async function sendMessage() {
    const message = chatInput.value;
    chatInput.value = '';
  
    displayMessage('user', message);
  
    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
      });
  
      const data = await response.json();
      displayMessage('bot', data.message);
    } catch (error) {
      console.error('Błąd:', error);
      displayMessage('bot', 'Wystąpił błąd.');
    }
  }
  
  function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  chatSend.addEventListener('click', sendMessage);
  
  chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });