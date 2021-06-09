let userNum = +prompt();
let lDig = userNum%10;
let tempNum;
let newNum;

if (userNum%10 === 0 || userNum <= 9) {
	console.log(userNum);
} else {
	tempNum = (userNum-lDig)/10;
	newNum = lDig+String(tempNum);
	console.log(newNum);
}
