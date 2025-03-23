// script.js
document.getElementById('filtruj').addEventListener('click', function() {
    const rodzaj = document.getElementById('rodzaj').value;
    const kwota = document.getElementById('kwota').value;
    const okres = document.getElementById('okres').value;
    // Tutaj dodasz kod obsługujący filtrowanie ofert na podstawie wybranych kryteriów
    // i wyświetlanie ich na stronie.
    console.log('Filtruj oferty:', rodzaj, kwota, okres);
    // Przykładowe wyświetlanie ofert (do zastąpienia logiką backendu)
    const listaOfert = document.querySelector('.lista-ofert');
    listaOfert.innerHTML = ''; // Wyczyść poprzednie oferty
    // ... logikę pobierania i wyświetlania ofert
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