const caesar = function(string, shift) {

    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaUpperArray = alpha.toUpperCase().split("");
    const alphaArray = alpha.split("");
    const stringArray = string.split("");

    while (shift < 0){
        shift = alphaArray.length + shift;
    } 
    for(let i = 0; i < stringArray.length; i++){
        if(alphaArray.includes(stringArray[i])){
            const index = alphaArray.indexOf(stringArray[i]);
            stringArray[i] = alphaArray[(index + shift) % alphaArray.length];
        } 
        else if (alphaUpperArray.includes(stringArray[i])){

            const index = alphaUpperArray.indexOf(stringArray[i]);
            stringArray[i] = alphaUpperArray[(index + shift) % alphaArray.length]; 
        }
    }

    return stringArray.join("");
    
}

module.exports = caesar
