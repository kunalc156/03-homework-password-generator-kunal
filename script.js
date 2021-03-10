// Assignment Code
var pass_len = 0;   //variable to store password length
var allowedCharacters = ""; //allowed character selection storage

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
    allowedCharacters = ""; //resetting for every invoke

    passwordLength() > 0 ? passwordCharacterType() : invalidLengthAlert();
    var result = "";

    if( allowedCharacters != "" && pass_len > 0 ){
      var allowedCharactersLength = allowedCharacters.length;
      for ( var i = 0; i < pass_len; i++ ) {
         result += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharactersLength));
      }

      if( result != "" )
        alert("Password generated successfully");  
    }
    return result;
}

/**
 * function to get and validate password length
 */
function passwordLength(){
  var len = prompt("Enter the password length");
  len = parseInt(len);
  // check password length
  if(len < 8 || len > 128 || isNaN(len)) return 0;
  
  pass_len = len;

  return len; 
}

/**
 * generate password character type requirement
 */
function passwordCharacterType(){
  var uppercaseInc =  confirm("Do you want to include upper case characters?");
  var lowerCaseInc =  confirm("Do you want to include lower case characters?");
  var numberInc =  confirm("Do you want to include numbers?");
  var specialCharInc =  confirm("Do you want to include special characters?");

  if( !uppercaseInc && !lowerCaseInc && !numberInc && !specialCharInc ){
    invalidCharacterTypeRequirement();
  } else {
    if(uppercaseInc)
      allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if(lowerCaseInc)
      allowedCharacters += "abcdefghijklmnopqrstuvwxyz";
    
    if(numberInc)
      allowedCharacters += "0123456789";

    if(specialCharInc)
      allowedCharacters += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";  
  }  
}

/**
 * function to get to characters types in password
 */
function invalidLengthAlert(){
  alert("Password length must be  a number value between 8 and 128");
}

/**
 * function to get to characters types in password
 */
function invalidCharacterTypeRequirement(){
  alert("You must choose atleast one character type prompted");
}