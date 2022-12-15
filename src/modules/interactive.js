import displayToDo, { todos } from './functionality.js';

// Elements
console.log('hello');

// Check To Do

function checkToDo(todoId) {
  todos = todos.map((todo, index) => {
    if (index === todoId) {
      return {
        description: todo.description,
        completed: !todo.completed,
        index: todo.index,
      };
    }

    return {
      description: todo.description,
      completed: todo.completed,
      index: todo.index,
    };
  });
  displayToDo();
  localStorage.setItem('todos', JSON.stringify(todos));
}

export default checkToDo;