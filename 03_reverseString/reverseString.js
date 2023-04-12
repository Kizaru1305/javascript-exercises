const reverseString = function(string) {
    let letters = string.split("");
    let reversedStr = '';
    for(let i = string.length - 1; i >= 0; i--){
        reversedStr += letters[i];
    }
    return reversedStr;   
};

// Do not edit below this line
module.exports = reverseString;
