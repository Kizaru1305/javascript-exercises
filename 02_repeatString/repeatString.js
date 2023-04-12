const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    const word = new Array(num);
    for(let i = 0; i < num; i++) {
        word[i] = string;
    }
    return word.join("");
};

// Do not edit below this line
module.exports = repeatString;
