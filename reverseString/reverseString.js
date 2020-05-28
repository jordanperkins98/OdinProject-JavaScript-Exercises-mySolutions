const reverseString = function(stringToReverse) {
    let string = "";
    for(let i = stringToReverse.length - 1; i >= 0; i--){
        string += stringToReverse[i];
    }
    return string;
}

module.exports = reverseString
