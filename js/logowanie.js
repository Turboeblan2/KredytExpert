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