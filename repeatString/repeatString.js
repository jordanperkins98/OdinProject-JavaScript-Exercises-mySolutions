const repeatString = function(stringToRepeat, numberOfRepeats) {
    let string = "";
    if (numberOfRepeats < 0) return "ERROR";

    for(let i = 0; i < numberOfRepeats; i++){
        string += stringToRepeat;
    }
    return string;
}

module.exports = repeatString
