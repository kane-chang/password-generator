// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // Length of password selection (with validation):
  function getPasswordLength() {
    let length = prompt("How long do you want your password to be? \n(Min 8, max 128 characters)");
    while (length < 8 | length > 128) {
      alert("invalid length, try again.");
      length = prompt("How long do you want your password to be? \n(Min 8, max 128 characters)");
    };
    return length;
  };
  var passwordLength = getPasswordLength();
  alert(`The length of your password will be: ${passwordLength}`); //check selected length

  // Character type selection (with validation):
  while (!lowerCase && !upperCase && !numeric && !specialCharacters) {
    alert("Next, select the character types for your password.\n(At least one character type has to be selected)");
    var lowerCase = confirm("Lowercase characters?");
    var upperCase = confirm("Uppercase characters?");
    var numeric = confirm("Numeric characters?");
    var specialCharacters = confirm("Special characters?");

    if (!lowerCase && !upperCase && !numeric && !specialCharacters) {
      alert("You did not select any character types, try again.")
    };
  };
  
  alert(`You have selected the following character types:
  Lowercase Characters: ${lowerCase}
  Uppercase Characters: ${upperCase}
  Numeric Characters: ${numeric}
  Special Characters: ${specialCharacters}
  `);

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);