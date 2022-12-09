import './style.css';

const toDoTask = [
  {
    description: 'Finish Carry Overs',
    completed: false,
    index: 0,
  },
  {
    description: 'Go for a 15 min walk',
    completed: false,
    index: 1,
  },
  {
    description: 'Finish this week project',
    completed: false,
    index: 2,
  },
];

const todos = [];

// Elements

const table = document.getElementById('table-body');
const form = document.getElementById('toDoForm');
const addToList = document.getElementById('addToList');

// Form Submit

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addToDo();
  displayToDo();
});

// Add to Do

function addToDo() {
  const task = addToList.value;
  const num = 0;
  const tasks = {
    description: task,
    completed: false,
    index: num,
  };

  todos.push(tasks);
  addToList.value = '';
  console.log(todos);
}

// Display to Do

function displayToDo() {
  table.innerHTML = '';
  todos.forEach((todo, index) => {
    table.innerHTML += `
        <tr class="todo" id="${index}">
          <td>
              <p>
              <i class="${todo.completed ? 'fa-regular fa-square-check' : 'fa-regular fa-square'}" data-attribute="check"></i> 
              <span data-attribute="edit">${todo.description}</span>
              </p>
          </td>
          <td class="iAlign"><span><i class="fa-solid fa-trash" data-attribute="remove"></i></span></td>
        </tr>
    `;
  });
}

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
  console.log(todoId, attribute);
});

const displayList = () => {
  for (let i = 0; i < toDoTask.length; i += 1) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <p><span>${toDoTask[i].completed} |</span> ${toDoTask[i].description}</p>
      </td>
      <td class="iAlign">${toDoTask[i].index}</td>
    `;
    table.appendChild(row);
  }
};

window.addEventListener('load', displayList);