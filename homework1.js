// 1. Swap 2 variables, without using any other variables.

// 123    // 42
// 35     // 63
// 70     // 5

let a = +prompt();
let b = +prompt();
a = a + b;
b = a - b;
a = a - b;
console.log(`a = ${a}, b = ${b}`);

////////////////////////////////////////////////////////////////////////////////

// 2. Given a positive integer. Bring the last digit of the number to 
//    the beginning. Print the new number. If the last digit of the
//    inserted number is 0, number remains the same.

// 367      // 736
// 1002     // 2100
// 250      // 250
// 8        // 8

// Variant 1
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

// Variant 2
let userNum = +prompt();
let lastDig = userNum%10;

if (lastDig === 0 || userNum < 10) {
	console.log(userNum);
} else {
	userNum = (userNum-lastDig) / 10;
	let n = 10;
	let i = 0;

	while ((userNum/n) >= 1) {
		n = n * 10;
		i++;
	}

	for (let j = 0; j <= i; j++) {
		lastDig = lastDig * 10;
	}

	userNum = lastDig + userNum;
	console.log(userNum);
}

////////////////////////////////////////////////////////////////////////////////

// 3. Given five numbers as input. Calculate and print the average 
//    of the numbers(without using arrays).

// 45, -12, 0, 3, -15    // 4.2
// 7, 52, -23, 9, -81    // -7.2

// Variant 1
let num1 = +prompt();  //  45
let num2 = +prompt();  // -12 
let num3 = +prompt();  //   0
let num4 = +prompt();  //   3
let num5 = +prompt();  // -15

let averNum = (num1+num2+num3+num4+num5)/5;
console.log(averNum);

// Variant 2
let count = +prompt();
let sum = 0;

for (let i = 0; i < count; i++) {
	let num = +prompt();
	sum += num;
}
console.log(sum / count);

////////////////////////////////////////////////////////////////////////////////

// 4. Given three numbers. Sort them by the ascending order.

// 45, 26, 78       // 26, 45, 78
// -23, -456, 0     // -456, -23, 0

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

////////////////////////////////////////////////////////////////////////////////

// 5. Given the following code rewrite it using only 
//    two if operators. (Hint: use logical operators).

// var n = +prompt();

// var i = 0;
// var j = 0;

// if (n%2 === 0) {
// 	if (!Math.floor(n/10)) {
// 	i += 1;
// 	}
// }
// if (n%3 === 0) {
// 	if(n%10 === 1) {
// 	j += 1;
// 	}
// }


var n = +prompt();
var i = 0;
var j = 0;

if (n%2 === 0 && !Math.floor(n/10)) {
	i += 1;
}
if (n%3 === 0 && n%10 === 1) {
	j += 1;
}
