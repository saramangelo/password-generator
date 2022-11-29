var upperCase = [
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

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [
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


var passwordArray = [];



// from office hours notes:
// var possiblePassword = [];
// var passwordArray = "";
// possibleChar = possibleChar.concat(lowerCaseArray);
// myPassword = [];
// use concat and use += (see post-it note)

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  
  // password has to be between 8 and 128 characters, needs prompting if erroneous input

  var characterNumberMessage =
    "Enter the number of characters you would like your password to be. Must be between 8 and 128 characters.";

  var userInput = prompt(characterNumberMessage);

  while (
    (userInput !== null && isNaN(userInput)) ||
    userInput < 8 ||
    userInput > 128
  ) {
    alert("Invalid entry. Please try again.");
    userInput = prompt(characterNumberMessage);
  }

  console.log(userInput);
  // user is presented with question - do you want to include 1. uppercase? 2. lowercase? 3. number? 4. special character?
  // user selects which criteria to include

  var upperCaseChoice = confirm(
    "Do you want to include an uppercase letter in your password?"
  );

  var lowerCaseChoice = confirm(
    "Do you want to include a lowercase letter in your password?"
  );

  var numberChoice = confirm(
    "Do you want to include a number in your password?"
  );
  var specialCharChoice = confirm(
    "Do you want to include a special character in your password?"
  );
  console.log(upperCaseChoice);
  console.log(lowerCaseChoice);
  console.log(numberChoice);
  console.log(specialCharChoice);

  if (
    !upperCaseChoice &&
    !lowerCaseChoice &&
    !specialCharChoice &&
    !numberChoice
  ) {
    alert("You must have at least one character type");
    var upperCaseChoice = confirm(
      "Do you want to include an uppercase letter in your password?"
    );

    var lowerCaseChoice = confirm(
      "Do you want to include a lowercase letter in your password?"
    );

    var specialCharChoice = confirm(
      "Do you want to include a special character in your password?"
    );

    var numberChoice = confirm(
      "Do you want to include a number in your password?"
    );
  } else {
    // move to next step
  }
  return "this needs to be all variables randomized and concatenated"; //  change

// need to utilize variable arrays above / validate input

if (upperCaseChoice){
  passwordArray += upperCase;
  // take all upper case letters, add to final array
}

if (lowerCaseChoice){
   passwordArray += lowerCase;
  // take all lower case letters, add to final array
}

if (specialCharChoice){
   passwordArray += specialChar;
  // take all special characters, add to final array
}

if (numberChoice){
   passwordArray += numbers;
  // take all numbers, add to final array
}

for(i = 0; i < upperCase.length; i++){
  upperCase[Math.floor(Math.random()*upperCase.length)];
  console.log(upperCaseChoice);
}
for(i = 0; i < lowerCase.length; i++){
  lowerCase[Math.floor(Math.random()*lowerCase.length)];
  console.log(lowerCase);
}
for(i = 0; i < specialChar.length; i++){
  specialChar[Math.floor(Math.random()*specialChar.length)];
  console.log(specialChar);
}
for(i = 0; i < numbers.length; i++){
  numbers[Math.floor(Math.random()*numbers.length)];
  
  console.log(numbers);
}

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
