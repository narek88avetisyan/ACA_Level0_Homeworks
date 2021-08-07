// 1. Given an array of numbers. Write a function to separate odd and 
//    even numbers in different arrays.

function toSepareteOddEven(arr) {
	let oddArr = [];
	let evenArr = [];
	let array = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i]%2) {
			oddArr.push(arr[i]);
		} else evenArr.push(arr[i]);
	}

	array.push(oddArr, evenArr);
	return array;
}

toSepareteOddEven ([45, 12, 3, 6, 17, 0])   // [45, 3, 17]   [12, 6, 0]
toSepareteOddEven ([1, 3, 5, 9])            // [1, 3, 5, 9]  []

////////////////////////////////////////////////////////////////////////////////

// 2. Given a word and a list of possible anagrams, select the correct sublist.

function getAnagrams(string, arr) {
	let anagramsArr = [];

	for (let i = 0; i < arr.length; i++) {
     	if (string.length === arr[i].length) {
         let count = 0;

         for (let j = 0; j < string.length; j++) {
            if (arr[i].includes(string[j]) && string.includes(arr[i][j])) {
               count++;
            }
         }

         if (count === string.length) {
            anagramsArr.push(arr[i]);
         }
      }
   }

   return anagramsArr;
}

getAnagrams ("listen", ["enlists", "google", "inlets", "banana"])             // ["inlets"]
getAnagrams ("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])  // ["licnep", "nilcpe"]

////////////////////////////////////////////////////////////////////////////////

// 3. Write a function which receives two strings and removes appearances of 
//    the second string from the first one.

function removePieceOfString(str, piece) {
	let newStr = "";

	for (let i = 0; i < str.length; i++) {
		if (str[i] === piece[0]) {
			let count = 0;

			for (let j = 0; j < piece.length; j++) {
				if (str[i+j] === piece[j]) {
					count++
				}
			}

			if (count === piece.length) {
				if (piece.length > 1) {
					i += piece.length-1;
				}
			} else newStr += str[i];
		} else newStr += str[i];	
	}

	return newStr;
}

removePieceOfString ("This isnot some interesting text.", "is"); // "Th not some interesting text."
removePieceOfString ("Yes, London. You know: fish, chips, cup of tea, bad food, worse weather", "o");
	//"Yes, Lndn. Yu knw: fish, chips, cup f tea, bad fd, wrse weather"

////////////////////////////////////////////////////////////////////////////////

// 4. Given an array of numbers. Create an array containing only unique elements.

function getUnique(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		let isIncluded = false;

		for (let j = 0; j < newArr.length; j++) {
			if (arr[i] === newArr[j]) {
				isIncluded = true;
				break;
			}
		}

		if (!isIncluded) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

getUnique ([1, 2, 3, 3, 2, 5])  // [1, 2, 3, 5]
getUnique ([4, 4])              // [4]

////////////////////////////////////////////////////////////////////////////////

// 5. Given a string and symbols. Change first symbol by the second one in the string.

function changeString(str, sb1, sb2) {
	let newStr = "";

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== sb1) {
			newStr += str[i];
		} else newStr += sb2;
	}
	
	return newStr;
}

changeString ("The results are not recorded yet", "t", "w")   // "The resulws are now recorded yew"
changeString ("does the following code", "o", "0")            // "d0es the f0ll0wing c0de"
