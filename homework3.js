// 1. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements 
//    starting from a to b spaced by step.

function returnArrayByStep (a, b, step) {
	array = [];
	for (let i = a; i <= b; i+=step) {
		array.push(i);
	}
	return array;
}

// returnArrayByStep (1, 5, 1);       //  [1, 2, 3, 4, 5]
// returnArrayByStep (10, 100, 20);   //  [10, 30, 50, 70, 90]
// returnArrayByStep (1, 5, 0.5);     //  [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]


// 2. Given an array of numbers. Find the maximum element in array. 

// Variant 1

function returnMaxElement (arr) {
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

// Variant 2

const returnMaxElement = function (arr) {
	let maxEl = Math.max.apply(null, arr);
	return maxEl;
}

// returnMaxElement ([1, 10, 2, 2, 3]);   // 10
// returnMaxElement ([1, 4, 43, -112]);   // 43


// 3. Given an array. Reverse it in place.

// Variant 1

function returnReverse (arr) {
	for (let i = 0; i < arr.length/2; i++) {
		let temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr;
}

// Variant 2

const returnReverse = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		arr.splice(i, 0, arr.pop());
	}
	return arr;
}

// returnReverse ([1, 2, 3]);             /// [3, 2, 1]
// returnReverse ([1, 1, 4, 32, 6]);      /// [6, 32, 4, 1, 1]


// 4. Given an array. Create the array which elements are products between two neighbours.

function returnArray (arr) {
	newArray = [];
	for (let i = 0; i < arr.length-1; i++) {
		newArray[i] = arr[i] * arr[i + 1];
	}
	return newArray;
}

// returnArray ([3, 7, 12, 5, 20, 0]);    // [21, 84, 60, 100, 0]
// returnArray ([1, 1, 4, 32, 6]);        // [1, 4, 128, 192]


// 5. Write a function that receives an array and an element as arguments and returns the 
//    (in place) array without that element if it’s included or vice versa.

// Variant 1

function returnNewList (arr, n) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== n) {
			count++;
			if (count === arr.length) {
				arr.push(n);
				return arr;
			}
		} else {
			for (let j = i; j < arr.length - 1; j++) {
				arr[j] = arr[j+1];
			}
			arr.pop();
		}
	}
	return arr;
}

// Variant 2

function returnNewList (arr, n) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== n) {
			count++;
			if (count === arr.length) {
				arr.push(n);
				return arr;
			}
		} else {
			arr.splice(i, 1);
		}
	}
	return arr;
}

// returnNewList ([1, 2, 3], 4)    //  [1, 2, 3, 4]
// returnNewList ([1, 2, 3], 2)    //  [1, 3]
