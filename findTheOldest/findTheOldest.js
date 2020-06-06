let findTheOldest = function(people) {
    return people.reduce((oldest, nextPerson) =>{
        if(nextPerson.hasOwnProperty('yearOfDeath')){
            const age = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
            nextPerson.age = age;
        } else{
            const age = new Date().getFullYear() - nextPerson.yearOfBirth;
            nextPerson.age = age;
        }

        if(!oldest.hasOwnProperty("age")){
            oldest = nextPerson;
        }
        else if(nextPerson.age > oldest.age){
            oldest = nextPerson;
        }
        return oldest;

    },{});
}


module.exports = findTheOldest
