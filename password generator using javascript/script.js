const passwordText = document.getElementById("password");
const length = 12;

//allowed
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%&*()_+~|{}[]<>/-=";

//function to generate random password
function createPassword(){
    let password="";
    while(password.length<length){
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    }
    passwordText.value = password;
}

function copyPassword(){
    passwordText.select();
    document.execCommand("copy");
}


