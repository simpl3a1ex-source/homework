//1. Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {
	return words.join(" ");
}

// 2. Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
	let z = [];
	for (let i = 1; i <= n; i++) {
		z.push(x * i);
	}
	return z;
}

//3 Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
	return dna.replaceAll("T", "U");
}

// 4 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
	return -Math.abs(num);
}

// 5 Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
	let double = 2;
	return i * double;
}

// 6 Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
	switch (operation) {
		case "+":
			return value1 + value2;
		case "-":
			return value1 - value2;
		case "*":
			return value1 * value2;
		case "/":
			return value1 / value2;
	}

	return 0;
}

// 7 Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) return [];

	return input.reduce(
		(acc, num) => {
			if (num > 0) {
				acc[0] += 1;
			} else if (num < 0) {
				acc[1] += num;
			}
			return acc;
		},
		[0, 0],
	);
}

//8 Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
var min = function (list) {
	return Math.min(...list);
};

var max = function (list) {
	return Math.max(...list);
};

// 9 Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
	return str.toUpperCase();
}

// 10 Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
	if (
		(flower1 % 2 === 0 && flower2 % 2 !== 0) ||
		(flower1 % 2 !== 0 && flower2 % 2 === 0)
	) {
		return true;
	} else {
		return false;
	}
}
