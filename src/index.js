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

const table = document.getElementById('table-body');

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