// script.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const email = document.getElementById('email').value;
    const haslo = document.getElementById('haslo').value;
    // Tutaj dodasz kod obsługujący rejestrację (wysyłanie danych do backendu)
    console.log('Rejestracja:', imie, nazwisko, email, haslo);
    // Przykładowe przekierowanie po rejestracji
    window.location.href = 'logowanie.html';
    });