// 1. Swap 2 variables, without using any other variables.

let a = +prompt();
let b = +prompt();
a = a + b;
b = a - b;
a = a - b;
console.log(`a = ${a}, b = ${b}`);


// 2. Given a positive integer. Bring the last digit of the number to 
//    the beginning. Print the new number. If the last digit of the
//    inserted number is 0, number remains the same.

let userNum = +prompt();
let lastDig = userNum%10;
let tempNum;
let newNum;

if (userNum%10 === 0 || userNum <= 9) {
	console.log(userNum);
} else {
	tempNum = (userNum-lastDig)/10;
	newNum = +(lastDig+String(tempNum));
	console.log(newNum);
}


// 3. Given five numbers as input. Calculate and print the average 
//    of the numbers(without using arrays).

let num1 = +prompt();  //  45
let num2 = +prompt();  // -12 
let num3 = +prompt();  //   0
let num4 = +prompt();  //   3
let num5 = +prompt();  // -15

let averNum = (num1+num2+num3+num4+num5)/5;
console.log(averNum);


// 4. Given three numbers. Sort them by the ascending order.

let a = +prompt();   //  -23
let b = +prompt();   // -456
let c = +prompt();   //    0

if (a < b && a < c) {
	if(b < c) {
		console.log(a, b, c);
	} else {
		console.log(a, c, b);
	}
} else if (b < c) {
	if (a < c) {
		console.log(b, a, c);
	} else {
		console.log(b, c, a);
	}
} else {
	if (a < b) {
		console.log(c, a, b);
	} else {
		console.log(c, b, a);
	}
}


// 5. Given the following code rewrite it using only 
//    two if operators. (Hint: use logical operators).

var n = +prompt();

var i = 0;
var j = 0;

if (n%2 === 0) {
	if (!Math.floor(n/10)) {
	i += 1;
	}
}
if (n%3 === 0) {
	if(n%10 === 1) {
	j += 1;
	}
}


var n = +prompt();
var i = 0;
var j = 0;

if (n%2 === 0 && !Math.floor(n/10)) {
	i += 1;
}
if (n%3 === 0 && n%10 === 1) {
	j += 1;
}
