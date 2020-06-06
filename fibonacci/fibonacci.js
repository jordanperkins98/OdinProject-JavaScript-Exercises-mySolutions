const fibonacci = function(index) {
    if(index < 0){ return "OOPS"}
    let sequence = [1,1];
    for(let i = 2; i <= index; i++){
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence[i] = nextNumber;
    }
    return sequence[index - 1];    
}

module.exports = fibonacci
