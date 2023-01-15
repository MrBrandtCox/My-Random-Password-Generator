//set some functions
var generateBtn = document.querySelector("#generate");
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numeric = '1234567890';
var specialChar = '~`!@#$%^&*()_-=+[]{}:;",<>./?';
var passwordLength = '0';


// Ask y or n for uppercase
// Ask y or n for lowercase
// Ask y or n for numeric
// Ask y or n for specialChar
// Ask to input a number 8-128 for passwordLength

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function createPassword{
    
  }

  passwordText.value = password;

}

// function that prompts the user to select their desired password length (8-128)

function
// function that prompts the user to select their preferences from the listed questions

function 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

