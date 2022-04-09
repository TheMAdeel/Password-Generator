/******************************
      Select all Elements
******************************/
const output = document.querySelector("#output");
const copy = document.querySelector(".copy");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generatebtn = document.getElementById("generatebtn");


/******************************
      Password Content
******************************/
let password = "";
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolsSet = "!@#$%^&*()_+|:;?";


/******************************
      On input Chnage
******************************/
output.addEventListener("change", ()=>{
    password += output.value;
})


/******************************
      Get Random Character
******************************/
const generateItem = (setName)=>{
    return setName[Math.floor(Math.random() * setName.length)];
}


/******************************
      Password Generator
******************************/
const generatePassword = ()=>{
    let passwordLength = length.value;
    let rn = Math.floor(Math.random() * 4);
    if(rn == 0){
        if(uppercase.checked) password+=  generateItem(uppercaseSet);
        if(symbols.checked) password+=  generateItem(symbolsSet);
        if(lowercase.checked) password+=  generateItem(lowercaseSet);
        if(numbers.checked) password+=  generateItem(numberSet);
    }
    if(rn == 1){
        if(numbers.checked) password+=  generateItem(numberSet);
        if(uppercase.checked) password+=  generateItem(uppercaseSet);
        if(symbols.checked) password+=  generateItem(symbolsSet);
        if(lowercase.checked) password+=  generateItem(lowercaseSet);
    }
    if(rn == 2){
        if(lowercase.checked) password+=  generateItem(lowercaseSet);
        if(numbers.checked) password+=  generateItem(numberSet);
        if(uppercase.checked) password+=  generateItem(uppercaseSet);
        if(symbols.checked) password+=  generateItem(symbolsSet);
    }
    if(rn == 3){
        if(symbols.checked) password+=  generateItem(symbolsSet);
        if(lowercase.checked) password+=  generateItem(lowercaseSet);
        if(numbers.checked) password+=  generateItem(numberSet);
        if(uppercase.checked) password+=  generateItem(uppercaseSet);
    }

    if(password.length < passwordLength) generatePassword();
    password = isLengthEqual(password, passwordLength);
    output.value = password;
}


/****************************************
      Password length Confirmation
****************************************/
const isLengthEqual = (str, num) =>{
    if(str > num){
        return str = str.substring(0, num);
    }else{
        return str;
    }
}


/*************************************
      On Generate Button Click
*************************************/
generatebtn.addEventListener("click", ()=>{
    password = "";
    generatePassword();
});


/******************************
      Copy Password
******************************/
const copyPassword = ()=>{
    if(password.length != 0){
        output.select();
        output.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(output.value);
        alert("Copied the text: " + output.value);
    }
}
copy.addEventListener("click", copyPassword)