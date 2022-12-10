/* eslint-disable import/no-cycle */

// Edit to do
import { todos } from '../index.js';
import displayToDo from './displayToDo.js';

const editToDo = (todoId) => {
  const row = document.getElementById(todoId);
  const input = document.getElementById(`edit${todoId}`);
  row.classList.add('highlight');
  input.removeAttribute('readonly');
  input.focus();
  input.addEventListener('blur', () => {
    row.classList.remove('highlight');
    input.setAttribute('readonly', true);
    todos[todoId].description = input.value;
    displayToDo();
    localStorage.setItem('todos', JSON.stringify(todos));
  });
};

export default editToDo;