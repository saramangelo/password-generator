// create variables to hold the character options for special, lowercase, uppercase, and numeric characters

// create an empty array that will hold the users selected characters

// var possibleChars = ()
// var passwordArray = ()

// on game start prompt for users number of character and hold in a variable
// var numChars = prompt("How many characters would you like in your password?")

// check the users input and confirm they put a number between 8 and 128, and that it is numeric

// write function that validates users input

// function validateUserInput() {
// parseInt(chars)
// if (chars < 8 || chars > 128) {
//  return null
// }
// }

// after validation create variables for character selections

// var specialChars = confirm("Would you like special characters?")
// var numericalNums = confirm("Would you like numerical characters?")
// var lowerChars = confirm("Would you like lower characters?")
// var upperChars = confirm("Would you like upper characters?")

// validate that at least one option was selected

// if (!specialChars && !numericalNums && !lowerChars && !upperChars) {
//    alert("You need to select at least one type of character");
// return generatePassword()
// }

// after validation (that user has selected between 8-128 numerical characters and at least one of the characters) is complete start pushing the selected characters into possible chars array

// if (specialChars) {
// possibleChars.concat(specialCharsArray)
//} 
// if (numbericalChars) {
// possibleChars.concat(specialCharsArray)
//} 

// create a random number

// loop through possibleChars and select a random character from the possibleChars array based on how many characters they entered into the prompt

// push() the randomly generated character to an empty array called passwordArray

// return passwordArray.join() <-- takes an array and joins it into a string



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var password = "";
var passwordLength = prompt("How many characters would you like your password to have?");
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 characters.");
  return;
}
var passwordLowerCase = confirm("Would you like to include lowercase letters in your password?");
var passwordUpperCase = confirm("Would you like to include uppercase letters in your password?");
var passwordNumbers = confirm("Would you like to include numbers in your password?");
var passwordSpecialChars = confirm("Would you like to include special characters in your password?");
var passwordCharacters = "";

if (passwordLowerCase) {
  passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
}
if (passwordUpperCase) {
  passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (passwordNumbers) {
  passwordCharacters += "0123456789";
}
if (passwordSpecialChars) {
  passwordCharacters += "!"#$%&'()*+,-./:;<=>?@[/]^_`{|}~"
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "/",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];



//NEW//

//DOM Elements
// const resultEl = document.getElementById("result");
// const lengthEl = document.getElementById("length");
// const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
// const numbersEl = document.getElementById("numbers");
// const symbolsEl = document.getElementById("symbols");
// const generateEl = document.getElementById("generate");
// const clipboardEl = document.getElementById("clipboard");

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// };

// //Generate Event Listener
// generateEl.addEventListener("click", () => {
//   const length = +lengthEl.value;
//   const hasLower = lowercaseEl.checked;
//   const hasUpper = uppercaseEl.checked;
//   const hasNumber = numbersEl.checked;
//   const hasSymbol = symbolsEl.checked;

//   resultEl.innerText = generatePassword(
//     hasLower,
//     hasUpper,
//     hasNumber,
//     hasSymbol,
//     length
//   );
// });

// //Generate password function
// function generatePassword(lower, upper, number, symbol, length) {
//   // 1. init pw var
//   // 2. filter out unchecked types
//   // 3. loop over length call generate function for each type
//   // 4. add final pw to the pw var and return

//   let generatedPassword = "";
//   const typesCount = lower + upper + number + symbol;

//   console.log("typesCount: ", typesCount);

//   const typesArr = [lower, upper, number, symbol];

//   console.log("typesArr: ", typesArr);
// }

// // Generator functions http://www.net-comber.com/charset.html

// //generate random lowercase letter
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbols = [
//     "!",
//     '"',
//     "#",
//     "$",
//     "%",
//     "&",
//     "'",
//     "(",
//     ")",
//     "*",
//     "+",
//     ",",
//     "-",
//     ".",
//     "/",
//     ":",
//     ";",
//     "<",
//     "=",
//     ">",
//     "?",
//     "@",
//     "[",
//     "/",
//     "]",
//     "^",
//     "_",
//     "`",
//     "{",
//     "|",
//     "}",
//     "~",
//   ];
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }
