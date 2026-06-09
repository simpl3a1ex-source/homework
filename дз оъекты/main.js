// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
	name: "Alexei",
	age: 27,
	city: "Yuzhno-Sakhalinsk",
	mail: "simpl3.a1ex@gmail.com",
};
for (const key in person) {
	console.log(`${key}:${person[key]}`);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
	for (const key in object) {
		return false;
	}
	return true;
}

const emptyObject = {};
const fullObject = { age: 27 };

console.log(isEmpty(emptyObject));
console.log(isEmpty(fullObject));
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
	title: "Обучение",
	description: "Решить задачу",
	isCompleted: false,
};

function cloneAndModify(object, modifications) {
	return { ...object, ...modifications };
}
const updTask = cloneAndModify(task, {
	description: "Задача решена",
	isCompleted: true,
});

for (const key in updTask) {
	console.log(`${key}:${updTask[key]}`);
}
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const callAllMethods = (object) => {
	for (let key in object) {
		if (typeof object[key] === "function") {
			object[key]();
		}
	}
};

const object = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};
callAllMethods(object);
