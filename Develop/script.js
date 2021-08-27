// Assignment code here
var confirmEnter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

uppercase = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
character = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","{","}","[","]",";",":","<",">","?"]
number = ["1","2","3","4","5","6","7","8","9"];

var choices;

function generatePassword() {
  confirmEnter = window.prompt("How many characters would you like to use? Enter a number between 8 and 128.");
  if (!confirmEnter) {
    alert("This need a value.");
  } else if (confirmEnter < 8 || confirmEnter > 128) {
    alert("You must choose a valid answer.");
    return generatePassword();
  } else {
    confirmUppercase = confirm("Do you want Uppercase Letters in your password?");
    confirmLowercase = confirm("Do you want Lowercase Letters in your password?");
    confirmCharacter = confirm("Do you want Special Characters in your password?");
    confirmNumber = confirm("Do you want Numbers in your password?");
  };
// no parameters picked
  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    var choices = window.alert("You must choose a criteria for the password.");
    return generatePassword();
  } 

// 4 confirmed parameters
  else if (confirmUppercase && confirmLowercase && confirmCharacter && confirmNumber) {
    var choices= uppercase.concat(lowercase,character, number);
  }
  // 3 confirmed parameters
  else if (confirmUppercase && confirmNumber && confirmLowercase){
    var choices = uppercase.concat(number,lowercase);
  }
  else if (confirmUppercase && confirmCharacter && confirmNumber) {
    var choices = uppercase.concat(character, number);
  }
  else if (confirmUppercase && confirmLowercase && confirmCharacter) {
    var choices = uppercase.concat(lowercase,character);
  }
  else if (confirmLowercase && confirmCharacter && confirmNumber) {
    var choices = lowercase.concat(character,number);
  }
  //2 confirmed choices
  else if (confirmUppercase && confirmLowercase) {
    var choices = uppercase.concat(lowercase);
  }
  else if (confirmUppercase && confirmCharacter) {
    var choices= uppercase.concat(character);
  }
  else if (confirmUppercase && confirmNumber) {
    var choices= uppercase.concat(number);
  }
  else if (confirmLowercase && confirmCharacter) {
    choices = lowercase.concat(character);
  }
  else if (confirmLowercase && confirmNumber) {
    var choices = lowercase.concat(number);
  }
  else if (confirmCharacter && confirmNumber) {
    var choices = character.concat(number);
  }
  // 1 choice confirmed
  else if (confirmUppercase) {
    var choices = uppercase;
  }
  else if (confirmLowercase) {
    var choices = lowercase;
  }
  else if (confirmCharacter) {
    var choices = character;
  }
  else if (confirmNumber) {
    var choices = number;
  };
var password = [];

for (var i = 0; i < confirmEnter; i++);
var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
  console.log(pickChoices);
  return (pickChoices)
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