// var n = +prompt();

// var i = 0;
// var j = 0;

// if (n%2 === 0) {
// 	if (!Math.floor(n/10)) {
// 		i += 1;
// 	}
// }
// if (n%3 === 0) {
// 	if (n%10 === 1) {
// 		j += 1;
// 	}
// }


var n = +prompt();

var i = 0;
var j = 0;

if (n%2 === 0 && !Math.floor(n/10)) {
	i += 1;
	console.log(i);
}
if (n%3 === 0 && n%10 === 1) {
	j += 1;
	console.log(j);
}
