// Assignment code here
function generatePassword() {
  enter = parseInt("How many characters would you like to use? Enter a number between 8 and 128.");
  if (!enter) {
    alert("This need a value.");
  } else if (enter < 8 || enter > 128) {
    alert("You must choose a valid answer.");
    return (enter);
  } else {
    confirmUppercase = confirm("Do you want Uppercase Letters in your password?");
    confirmLowercase = confirm("Do you want Lowercase Letters in your password? Choose 'Y' for yes or 'N' for no.");
    confirmCharacter = confirm("Do you want Special Characters in your password?");
    confirmNumber = confirm("Do you want Numbers in your password?");
  };
// no parameters picked
  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    choices = window.alert("You must choose a criteria for the password.");
  } 

// 4 confirmed parameters
  else if (confirmUppercase && confirmLowercase && confirmCharacter && confirmNumber) {
    choices= uppercase.concat(lowercase,character, number);
  }
  // 3 confirmed parameters
  else if (confirmUppercase && confirmNumber && confirmLowercase){
    choices = uppercase.concat(number,lowercase);
  }
  else if (confirmUppercase && confirmCharacter && confirmNumber) {
    choices = uppercase.concat(character, number);
  }
  else if (confirmUppercase && confirmLowercase && confirmCharacter) {
    choices = uppercase.concat(lowercase,character);
  }
  else if (confirmLowercase && confirmCharacter && confirmNumber) {
    choices = lowercase.concat(character,number);
  }
  //2 confirmed choices
  else if (confirmUppercase && confirmLowercase) {
    choices = uppercase.concat(lowercase);
  }
  else if (confirmUppercase && confirmCharacter) {
    choices= uppercase.concat(character);
  }
  else if (confirmUppercase && confirmNumber) {
    choices= uppercase.concat(number);
  }
  else if (confirmLowercase && confirmCharacter) {
    choices = lowercase.concat(character);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = lowercase.concat(number);
  }
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  }
  // 1 choice confirmed
  else if (confirmUppercase) {
    choices = uppercase;
  }
  else if (confirmLowercase) {
    choices = lowercase;
  }
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  };

}
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

uppercase = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
character = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","{","}","[","]",";",":","<",">","?"]
number = ["1","2","3","4","5","6","7","8","9"];

var choices;

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