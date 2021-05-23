// Events
document.getElementById('genButton').addEventListener("click", function() {
    var passwordLength = prompt("What is the length of your password?(not less than 8 characters & not more than 128)");
    var lowercaseCheck = confirm("Should it include lower case characters?!");
    var uppercaseCheck = confirm("Should it include upper case characters?!");
    var numberCheck = confirm("Should it include numbers?!");
    var symbolCheck = confirm("Should it include symbols?!");

});