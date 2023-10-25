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

// Password criteria variables:
var passwordLength;
var lowerCase;
var upperCase;
var numeric;
var special;

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
  passwordLength = getPasswordLength();
  alert(`The length of your password will be: ${passwordLength}`); //check selected length

  // Character type selection (with validation):
  let selectedCharTypes = false
  while (!selectedCharTypes) {
    alert("Next, select the character types for your password.\n(At least one character type has to be selected)");
    lowerCase = confirm("Lowercase characters?");
    upperCase = confirm("Uppercase characters?");
    numeric = confirm("Numeric characters?");
    special = confirm("Special characters?");

    if (!lowerCase && !upperCase && !numeric && !special) {
      alert("You did not select any character types, try again.")
    } else {
      break
    }
  };

  alert(`You have selected the following character types:
  Lowercase Characters: ${lowerCase}
  Uppercase Characters: ${upperCase}
  Numeric Characters: ${numeric}
  Special Characters: ${special}
  `);

}

// Function for getting a random element from an array
function getRandom(arr) {
  let random =
    Math.floor(Math.random() * arr.length);
  // console.log("Random Number Generated : " + random); <--- test logs
  // console.log(arr[random])
  character = arr[random]
  return character
};

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  // console.log(passwordLength); <-- test logs
  // console.log(lowerCase);
  // console.log(upperCase);
  // console.log(numeric);
  // console.log(special);

  // Password generation variables:
  var passwordGenerated = "";
  var passwordGeneratedLength = 0;
  var selectedCharactersTypes = []

  // Conditionals checking for selected character types to be included in generated password:
  if (lowerCase) {
    passwordGenerated += getRandom(lowerCasedCharacters);
    passwordGeneratedLength += 1;
    selectedCharactersTypes = selectedCharactersTypes.concat(lowerCasedCharacters)
  };
  if (upperCase) {
    passwordGenerated += getRandom(upperCasedCharacters);
    passwordGeneratedLength += 1;
    selectedCharactersTypes = selectedCharactersTypes.concat(upperCasedCharacters)
  };
  if (numeric) {
    passwordGenerated += getRandom(numericCharacters);
    passwordGeneratedLength += 1;
    selectedCharactersTypes = selectedCharactersTypes.concat(numericCharacters)
  };
  if (special) {
    passwordGenerated += getRandom(specialCharacters);
    passwordGeneratedLength += 1;
    selectedCharactersTypes = selectedCharactersTypes.concat(specialCharacters)
  };
  // console.log(passwordGenerated);
  // console.log(passwordGeneratedLength);
  // console.log(selectedCharactersTypes);

  // For loop to randomly select remaining password characters from selected character types
  for (let i = 0; i < (passwordLength - passwordGeneratedLength); i++) {
    const newChar = getRandom(selectedCharactersTypes);
    passwordGenerated += newChar
  };
  // console.log(passwordGenerated);
  return passwordGenerated;
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