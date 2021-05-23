// Elements
var result = document.querySelector('#result');
var passwordLength = prompt("Password length?!(at least 8 characters no more than 128)");
var lowercaseCheck = document.querySelector('#lowercaseCharacter');
var uppercaseCheck = document.querySelector('#uppercaseCharacter');
var numberCheck = document.querySelector('#numberCharacter');
var symbolCheck = document.querySelector('#symbolCharacter');
var genButton = document.querySelector('.genButton');
var successMsg = document.querySelector('.success-msg');

// Getting Charactes
function getLowerChars() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperChars() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getNumberChars() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getSpecialChars() {
    var symbols = '!@#$%^&*()_+{}:"<>?';
    return symbols[Math.floor(Math.random() * symbols.length)];

}

var randomChars = {
    lowercase: getLowerCharacters,
    uppercase: getUpperCharacters,
    number: getNumberCharacters,
    symbol: getSymbolCharacters
}

// Generating Password
function generatedPassword(length, lowercase, uppercase, number, symbol) {
    //  initial values 
    let generatedPassword = '';
    var checkCount = lowercase + uppercase + number + symbol;

    // Getting Checks
    var checks = [{ lowercase }, { uppercase }, { number }, { symbol }]
        .filter(item => Object.values(item)[0]);

    // Not Generating Password as There is No Enough Data Selected
    if (checkCount === 0) {
        return '';
    }

    // Generating Characters
    for (let i = 0; i < length; i += checkCount) {
        checks.forEach(check => {
            // Getting Function that Will Generate Character
            var randomCharacterFunction = Object.keys(check)[0];

            // Appending Value to Generated Password
            generatedPassword += getRandomCharacter[randomCharacterFunction]();
        });
    }

    result.value = generatedPassword;
}



// Events
genButton.addEventListener('click', () => {
    var result = document.querySelector('#result');
    var passwordLength = prompt("Password length?!(at least 8 characters no more than 128)");
    var lowercaseCheck = document.querySelector('#lowercaseCharacter');
    var uppercaseCheck = document.querySelector('#uppercaseCharacter');
    var numberCheck = document.querySelector('#numberCharacter');
    var symbolCheck = document.querySelector('#symbolCharacter');
    var genButton = document.querySelector('.genButton');
    var successMsg = document.querySelector('.success-msg');
    // Getting Values
    var length = +passwordLength.value;
    var lowercase = lowercaseCheck.checked;
    var uppercase = uppercaseCheck.checked;
    var number = numberCheck.checked;
    var symbol = symbolCheck.checked;

    generatePassword(
        length,
        lowercase,
        uppercase,
        number,
        symbol
    );
});