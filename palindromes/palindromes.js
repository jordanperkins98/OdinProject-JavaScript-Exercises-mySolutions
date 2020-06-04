const palindromes = function(string) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    punctuation = punctuation.split("");

    const rawLetters = string.toLowerCase().split("");
    //look for punctuation in string, if it finds it delete it (it will return 1 if found) then joins the array together.
    let cleanLetters = rawLetters.filter(letter => punctuation.indexOf(letter) === -1);
    cleanLetters = cleanLetters.join("");
    //spliting string into array, reversing it then joining back together.
    const reversedCleanLetters = cleanLetters.split("").reverse().join("");
    
    return cleanLetters === reversedCleanLetters;
}

module.exports = palindromes
