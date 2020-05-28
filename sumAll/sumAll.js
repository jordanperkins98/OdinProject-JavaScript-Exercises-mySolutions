const sumAll = function(range1, range2) {

    let minRange;
    let maxRange;
    let sum = 0;

    if (!Number.isInteger(range1) || !Number.isInteger(range2)|| range1 < 0 || range2 < 0){ return "ERROR"}

    if (range1 < range2){
         minRange = range1;
         maxRange = range2;
    } else {
         minRange = range2;
         maxRange = range1;
    }



    for(let i = minRange; i <= maxRange; i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll
