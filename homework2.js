// 1. Count numbers of digit 9 in a number.

// Քանի որ պայմանի մեջ չի նշվում որ միայն դրական թվերին է վերաբերվում, օգ-
// տագործել եմ՝ Math.abs, որպեսզի աշխատի նաև բացասական թվերի համար:

let userNum = +prompt();
let absNum = Math.abs(userNum); 
let count = 0;

for (let i = 0; absNum > 0; i++) {
    if (absNum%10 === 9) {
        count++;
    }
    absNum = (absNum - absNum%10) / 10;
}
console.log(count);


// 2. Given two numbers. Print powers of 2 between that
//    numbers. (without using Math.pow)

let userNum1 = +prompt();
let userNum2 = +prompt();
let powersTwo = "";

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

// or

let userNum1 = +prompt();
let userNum2 = +prompt();
let zPow = 1;   // 2-ի 0 աստիճան
let powersTwo = "";

while (zPow < userNum2) {
    if (zPow > userNum1) {
        if(zPow*2 > userNum2) {
            powersTwo += `${zPow}`;
        } else powersTwo += `${zPow}, `;
    }
    zPow *= 2;
}
console.log(powersTwo);


// 3. Given a number as input, insert dashes (-) between 
//    each two even numbers.

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


// 4. Given a positive number. Print it in reverse order.

let userNum = +prompt();
let revNum = "";

for (let i = 0; userNum > 0; i++) {
    revNum += userNum%10;
    userNum = (userNum - (userNum%10)) / 10;
}
console.log(+revNum);


// 5. Insert a n positive number. Print the n-st prime number.

let n = +prompt();
let count = 0
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
