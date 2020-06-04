function add (num1,num2) {
	return num1 + num2;
}

function subtract (num1,num2) {
	return num1 - num2;
}

function sum (arrayOfNums) {
	const sum = arrayOfNums.reduce((total, currentNum) => {
		return total + currentNum
	}, 0);

	return sum;
}

function multiply (arrayOfNums) {
	const multiplySum = arrayOfNums.reduce((total, currentNum) => total * currentNum);
	return multiplySum;
}

function power(num, power) {
	let sum = num;
	for(let i = 1; i < power; i++){
		sum *= num;
	}
	return sum
}

function factorial(num) {
	let sum = 1;
	for(let i = num; i > 0; i--){
		sum *= i;
	}
	return sum
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}