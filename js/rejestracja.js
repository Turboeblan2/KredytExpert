document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const email = document.getElementById('email').value;
    const haslo = document.getElementById('haslo').value;
  
    
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
  
   