const leapYears = function(yearToCheck) {

    if(yearToCheck % 4 === 0 && (yearToCheck % 100 !== 0 || yearToCheck % 400 === 0)){
        return true;
    } else {
        return false;
    }

}

module.exports = leapYears
