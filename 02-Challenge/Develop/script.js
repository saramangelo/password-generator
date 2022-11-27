var lowerCase = [
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
];

var upperCase = ["A",
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
"Z",];


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



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // user is presented with question - do you want to include 1. uppercase? 2. lowercase? 3. special character? 4. number?
 // user selects which criteria to include
  var upperCaseChoice = confirm("Do you want to include an uppercase letter in your password?");
  var lowerCaseChoice = confirm("Do you want to include a lowercase letter in your password?");
  var specialCharChoice = confirm("Do you want to include a special character in your password?");
  var numberChoice = confirm("Do you want to include a number in your password?");
 console.log("upperCaseChoice: " + upperCaseChoice);
 console.log("lowerCaseChoice: " + lowerCaseChoice);
 console.log("specialCharChoice: " + specialCharChoice);
 console.log("numberChoice: " + numberChoice);
  // password has to be between 8 and 128 characters
  var characterNumber = prompt("Enter the number of characters you would like your password to be. Must be between 8 and 128 characters.");
  console.log("characterNumber: " + characterNumber);
  // password must have at least one character type from list of 4
  
  // password created from above selected criteria
  // password is displayed on screen

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
