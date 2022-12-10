/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */

import './style.css';
import addToDo from './modules/addToDo.js';
import displayToDo from './modules/displayToDo.js';
import editToDo from './modules/editToDo.js';

let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Elements

const form = document.getElementById('toDoForm');
const table = document.getElementById('table-body');

// Form Submit

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addToDo();
  displayToDo();
  localStorage.setItem('todos', JSON.stringify(todos));
});

// Remove to do
const removeToDo = (todoId) => {
  todos = todos.filter((todo, index) => index !== todoId);
  displayToDo();
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Event Listeners

table.addEventListener('click', (e) => {
  const { target } = e;
  const targetElement = target.parentElement.parentElement.parentElement;
  if (targetElement.className !== 'todo') return;

  // toDoId
  const todo = targetElement;
  const todoId = Number(todo.id);

  // target
  const { attribute } = target.dataset;

  if (attribute === 'edit' && editToDo(todoId));
  if (attribute === 'remove' && removeToDo(todoId));
});

window.addEventListener('load', displayToDo);

export { todos, table };