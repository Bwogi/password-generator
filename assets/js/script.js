var passwdTxt = document.getElementById("result");

var alphanumerals = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";



document.getElementById('genButton').addEventListener("click", function() {
    var passwordLength = prompt("What is the length of your password?");

    if (passwordLength > 8 && passwordLength < 128) {
        var charCheck = confirm("Should it include lower and upper case characters?!");
        var numberCheck = confirm("Should it include numbers?!");
        var symbolCheck = confirm("Should it include symbols?!");
        if (charCheck) {
            var characters = alphanumerals;
            if (numberCheck) {
                characters += numbers;
            }
            if (symbolCheck) {
                characters += symbols;
            }
            passwdTxt.value = genPasswd(passwordLength, characters);
        }
    } else {
        alert("Length of password must be between 8 and 128 characters")
    }

    function genPasswd(length, xters) {
        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(
                Math.floor(Math.random() * xters.length)
            );
        }
        return password;
    };


});