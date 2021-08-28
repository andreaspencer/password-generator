// Assignment code here
var confirmLength = "";
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

uppercase = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
character = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","{","}","[","]",";",":","<",">","?"]
number = ["1","2","3","4","5","6","7","8","9"];

function generatePassword() {
  var confirmLength = window.prompt("How many characters would you like to use? Enter a number between 8 and 128.");
  if (!confirmLength) {
    alert("This need a value.");
  } else if (confirmLength < 8 || confirmLength > 128) {
    alert("You must choose a valid answer.");
    return generatePassword();
  }
    //parameters of password
    var confirmUppercase = confirm("Do you want Uppercase Letters in your password?");
    var confirmLowercase = confirm("Do you want Lowercase Letters in your password?");
    var confirmCharacter = confirm("Do you want Special Characters in your password?");
    var confirmNumber = confirm("Do you want Numbers in your password?");
// no parameters picked
  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    var choices = window.alert("You must choose a criteria for the password.");
    return generatePassword();
  } 
    var passwordChoices = [];
  // choice confirmed
  if (confirmUppercase) {
    var passwordChoices = passwordChoices.concat(uppercase);
  }
  if (confirmLowercase) {
    var passwordChoices = passwordChoices.concat(lowercase);
  }
  if (confirmCharacter) {
    var passwordChoices = passwordChoices.concat(character);
  }
  if (confirmNumber) {
    var passwordChoices = passwordChoices.concat(number);
  };

var passwordRandom = ""

for (var i = 0; i < confirmLength; i++) {
var passwordRandom = passwordRandom + passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
  console.log(passwordRandom);
}
  return passwordRandom;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generatePassword ();