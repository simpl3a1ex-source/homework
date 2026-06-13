"use strict";
// Задание 1.

// Дан массив пользователей:

const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);
console.log(users);

// Добавьте в конец массива двух пользователей:{ name: "Ann", age: 19, isAdmin: false },
// { name: "Jack", age: 43, isAdmin: true },

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
	let sum = 0;
	for (let i = 0; i < users.length; i++) {
		sum += users[i].age;
	}
	return sum / users.length;
}

console.log(getUserAverageAge(users));
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
	const admins = [];
	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin === true) {
			admins.push(users[i]);
		}
	}
	return admins;
}
console.log(getAllAdmins(users));
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
	if (n == 0) return [];
	if (n == undefined) return [arr[0]];
	if (n > arr.length) {
		console.error(
			`Не может бы больше длинны массива: ${arr.length}`,
		);
		return arr;
	}

	const result = [];
	for (let i = 0; i < n; i++) {
		result.push(arr[i]);
	}
	return result;
}

const num = [1, 2, 3, 4, 5];

console.log(first(num, 0));
console.log(first(num, 3));
console.log(first(num, undefined));
