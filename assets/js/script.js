var passwdTxt = document.getElementById("result");

var alphanumerals = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var characters = "";

var charCheck = "";
var numberCheck = "";
var symbolCheck = "";
var passwordLength = 0;

document.getElementById('genButton').addEventListener("click", function() {
    passwordLength = prompt("What is the length of your password?");

    if (passwordLength > 8 && passwordLength < 128) {
        // should it include chars ?
        charCheck = confirm("Should it include lower and upper case characters?!");
        // yes - > add alphanumerals to characters -
        if (charCheck) {
            characters += alphanumerals;
            // > should it include numbers ?
            numberCheck = confirm("Should it include numbers?!");
            if (numbers) {
                // yes - > add numbers to characters
                characters += numbers;
                symbolCheck = confirm("Should it include symbols?!");
                if (symbolCheck) {
                    characters += symbols;
                    passwdTxt.value = genPasswd(passwordLength, characters);
                }

            } else {
                symbolCheck = confirm("Should it include symbols?!");
                if (symbolCheck) {
                    characters += symbols;
                    passwdTxt.value = genPasswd(passwordLength, characters);
                }

            }


        } else {
            numberCheck = confirm("Should it include numbers?!");
            if (numberCheck) {
                characters += numbers;
                symbolCheck = confirm("Should it include symbols?!");
                if (symbolCheck) {
                    characters += symbols;
                    passwdTxt.value = genPasswd(passwordLength, characters);
                }


            } else {
                if (symbolCheck) {
                    characters += symbols;
                    passwdTxt.value = genPasswd(passwordLength, characters);
                }

            }

        }

    } else {
        alert("Length of password must be between 8 and 128 characters")
    }


    // generate password 
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