//set some functions
var generateBtn = document.querySelector("#generate");
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", ":", ";", ",", "<", ">", ".", "/", "?"];
var passwordLength = false;
//typeOf to check if input is equal to requirement to return error statement for user to see. Ex: is not a number 
// Ask to input a number 8-128 for passwordLength
// Ask y or n for uppercase
// Ask y or n for lowercase
// Ask y or n for numeric
// Ask y or n for specialChar

function generatePassword() {  
  var possibleChar = [];
  var passwordLength = prompt(
    "What is your desired password length? (Must be between 8 and 128 characters)"
  )

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128.")
    passwordLength = false;
    return null;
  }

  var specialCharConfirm = confirm("Do you want to include special characters in your password?           OK = Yes, Cancel = No");
  var numericCharConfirm = confirm("Do you want your password to contain numbers?");
  var lowerCharConfirm = confirm("Do you want your password to contain lowercase letters?");
  var upperCharConfirm = confirm("Do you want your password to contain uppercase letters?");

  if (!specialCharConfirm && !numericCharConfirm && !lowerCharConfirm && !upperCharConfirm) {
    alert("Must include at least one selection.")
    return null;
  }
  if (specialCharConfirm === true) {
    possibleChar = possibleChar.concat(specialChars);
  }
  if (numericCharConfirm === true) {
    possibleChar = possibleChar.concat(numericChars);
  }
  if (lowerCharConfirm === true) {
    possibleChar = possibleChar.concat(lowerChars);
  }
  if (upperCharConfirm === true) {
    possibleChar = possibleChar.concat(upperChars);
  }
  console.log(possibleChar);

  password = ""
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * possibleChar.length)
    password += possibleChar[randomIndex]
  }

  return password;
};





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === null) {
    return writePassword();
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);