/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

// Add to Do
import { todos } from '../index.js';

const addToList = document.getElementById('addToList');

const addToDo = () => {
  const task = addToList.value;
  const num = 0;

  todos.push({
    description: task,
    completed: false,
    index: num,
  });
  addToList.value = '';
};

export default addToDo;