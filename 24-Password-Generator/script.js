// script.js

// Elementi del DOM
const passwordField = document.getElementById("password");
const copyButton = document.getElementById("copy-btn");
const generateButton = document.getElementById("generate-btn");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const includeNumbersCheckbox = document.getElementById("include-numbers");
const includeSymbolsCheckbox = document.getElementById("include-symbols");

// Caratteri possibili
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

// Funzione per generare una password
function generatePassword(length, includeNumbers, includeSymbols) {
    let characterPool = letters;

    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    // Creazione della password
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }
    return password;
}

// Funzione per aggiornare la lunghezza mostrata accanto allo slider
function updateLengthDisplay() {
    lengthValue.textContent = lengthSlider.value;
}

// Funzione per copiare la password negli appunti
function copyToClipboard() {
    const password = passwordField.value;

    if (!password) {
        alert("Nessuna password da copiare!");
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        alert("Password copiata negli appunti!");
    }).catch(() => {
        alert("Errore durante la copia negli appunti!");
    });
}

// Event Listener per lo slider
lengthSlider.addEventListener("input", updateLengthDisplay);

// Event Listener per il pulsante di generazione
generateButton.addEventListener("click", () => {
    const length = parseInt(lengthSlider.value);
    const includeNumbers = includeNumbersCheckbox.checked;
    const includeSymbols = includeSymbolsCheckbox.checked;

    const password = generatePassword(length, includeNumbers, includeSymbols);
    passwordField.value = password;
});

// Event Listener per il pulsante di copia
copyButton.addEventListener("click", copyToClipboard);

// Inizializza la lunghezza dello slider
updateLengthDisplay();
