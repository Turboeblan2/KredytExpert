document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const email = document.getElementById('email').value;
    const haslo = document.getElementById('haslo').value;

    // Wysyłanie danych na serwer
    fetch('/register', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    imie: imie,
    nazwisko: nazwisko,
    email: email,
    haslo: haslo,
    }),
    })
    .then(response => response.json())
    .then(data => {
    if (data.success) {
    alert('Rejestracja pomyślna!');
    window.location.href = 'logowanie.html'; // Przekierowanie do strony logowania
    } else {
    alert('Błąd rejestracji: ' + data.message);
    }
    })
    .catch(error => {
    console.error('Błąd:', error);
    alert('Wystąpił błąd podczas rejestracji.');
    });
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