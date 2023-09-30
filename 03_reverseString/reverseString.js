const reverseString = function(word) {
    const wordArr = word.split("");
    let reversedStr = "";
    for (let i = wordArr.length-1; i >= 0; i--) {
        reversedStr = reversedStr + wordArr[i];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
