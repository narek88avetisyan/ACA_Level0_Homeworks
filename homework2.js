// 1. Count numbers of digit 9 in a number.

// 129      // 1
// 929      // 2
// 192999   // 4
// 887      // 0

let userNum = Math.abs(+prompt());
let count = 0;

while (userNum > 0) {
    if (userNum%10 === 9) {
        count++;
    }

    userNum = (userNum - userNum%10) / 10;
}

console.log(count);

////////////////////////////////////////////////////////////////////////////////

// 2. Given two numbers. Print powers of 2 between that
//    numbers. (without using Math.pow)

// 7, 45    // 8, 16, 32
// 0, 150   // 1, 2, 4, 8, 16, 32, 64, 128

// Variant 1
let userNum1 = +prompt();
let userNum2 = +prompt();
let powersTwo = "";

if (userNum1 > userNum2) {
    let temp = userNum1;
    userNum1 = userNum2;
    userNum2 = temp;
}

for (let n = 0; n < Math.sqrt(userNum2); n++) {
    for (let j = userNum1; j < userNum2; j++) {
        if (2**n === j) {
            if (2**(n+1) > userNum2) {
                powersTwo += `${j}`;
            } else powersTwo += `${j}, `;
        }
    }
}

console.log(powersTwo);

// Variant 2
let userNum1 = +prompt();
let userNum2 = +prompt();
let zPow = 1;   // 2-ի 0 աստիճան
let powersTwo = "";

if (userNum1 > userNum2) {
    let temp = userNum1;
    userNum1 = userNum2;
    userNum2 = temp;
}

while (zPow < userNum2) {
    if (zPow > userNum1) {
        if(zPow*2 > userNum2) {
            powersTwo += `${zPow}`;
        } else powersTwo += `${zPow}, `;
    }

    zPow *= 2;
}

console.log(powersTwo);

// Variant 3
let userNum1 = +prompt();
let userNum2 = +prompt();
let powersTwo = [];

if (userNum1 > userNum2) {
    let temp = userNum1;
    userNum1 = userNum2;
    userNum2 = temp;
}

for (let i = userNum1; i < userNum2; i++) {
    if (isNumPowersOfTwo (i)) {
        powersTwo.push(i);
    }
}

console.log(powersTwo);

function isNumPowersOfTwo(num) {
    if (num !== 0) {
        while (!(num%2) || num === 1) {
            if(num === 1) {
                return true;
            }
            num /= 2;
        }
    }
    
    return false;
}

////////////////////////////////////////////////////////////////////////////////

// 3. Given a number as input, insert dashes (-) between 
//    each two even numbers.

// 25468          // "254-6-8"
// 7180322        // "718-032-2"
// 42             // "4-2"
// 222            // "2-2-2"

// Variant 1
let userNum = prompt();
let finStrNum  = "";

for (let i = 0; i < userNum.length; i++) {
    if (userNum[i]%2 === 0 && userNum[i+1]%2 === 0) {
        finStrNum += userNum[i] + "-";
    } else finStrNum += userNum[i];
}

console.log(finStrNum);

// Variant 2
let userNum = +prompt();
let revNum = "";
let finStrNum = "";

for (let i = 0; userNum > 0; i++) {
    revNum += userNum%10;
    userNum = (userNum - (userNum%10)) / 10;
}
for (let i = 0; revNum > 0; i++) {
    if (revNum < 10) {
        finStrNum += revNum;
    } else if ((revNum%10)%2 === 0 && (((revNum-revNum%10)/10)%10)%2 === 0) {
        finStrNum += `${revNum%10}-`;
    } else {
        finStrNum += revNum%10;
    }

    revNum = (revNum - (revNum%10)) / 10;
}

console.log(finStrNum);

////////////////////////////////////////////////////////////////////////////////

// 4. Given a positive number. Print it in reverse order.

// 1253       // 3521
// 122        // 221

// Variant 1
let userNum = +prompt();
let revNum = "";

for (let i = 0; userNum > 0; i++) {
    revNum += userNum%10;
    userNum = (userNum - (userNum%10)) / 10;
}
console.log(+revNum);

// Variant 2
let userNum = prompt();
let revNum = "";

for (let i = userNum.length - 1; i >= 0; i--) {
    revNum += userNum[i];
}

console.log(+revNum);

////////////////////////////////////////////////////////////////////////////////

// 5. Insert a n positive number. Print the n-st prime number.

// 5       // 11
// 14      // 43

// Variant 1
let n = +prompt();
let count = 0;

for (let i = 2; i < n**2; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime === true) {
        count++;
    }

    if (count === n) {
        console.log(i);
        break;
    }
}

// Variant 2
function isPrime(n) {
    if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    return false;
}

function getNthPrime(num) {
    let count = 0;

    for (let i = 2; true; i++) {
        if (isPrime (i)) {
            count++;
        }
        
        if (count === num) {
            return i;
        }
    }
}

getNthPrime (+prompt());
