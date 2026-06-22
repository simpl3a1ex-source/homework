"use strict";

const todoKeys = {
	id: "ID",
	text: "Description",
	is_completed: "is_completed",
	date: "date",
};

let todos = [];

const errTodoNotFound = (todoId) => {
	return `Todo with id ${todoId} not found`;
};

const getNewTodoId = (todos) =>
	todos.reduce(
		(maxId, todo) => Math.max(maxId, todo[todoKeys.id]),
		0,
	) + 1;

const getTodoDate = (todos) => {
	return new Date().toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
};

const updateDateTodo = (todos, date, todoId) => {
	const todo = todos.find(
		(todo) => todo[todoKeys.id] === todoId,
	);
	if (todo === undefined) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.date] = date;
	return todo;
};

const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
		[todoKeys.date]: getTodoDate(),
	};

	todos.push(newTodo);
	return newTodo;
};

const completeTodoById = (todos, todoId) => {
	const todo = todos.find(
		(todo) => todo[todoKeys.id] === todoId,
	);
	if (todo === undefined) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] =
		!todo[todoKeys.is_completed];
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex(
		(todo) => todo[todoKeys.id] === todoId,
	);
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};
