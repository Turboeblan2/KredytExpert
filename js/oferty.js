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