// let a = 45;
// let b = 26;
// let c = 78;

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
