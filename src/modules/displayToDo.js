/* eslint-disable import/no-cycle */

// Display to Do
import { todos, table } from '../index.js';

const displayToDo = () => {
  table.innerHTML = '';
  todos.forEach((todo, index) => {
    table.innerHTML += `
          <tr class="todo" id="${index}">
            <td>
                <p>
                <i class="${todo.completed ? 'fa-regular fa-square-check' : 'fa-regular fa-square'}" data-attribute="check"></i>
                <input id="edit${index}" type="text" class="edit ${todo.completed ? 'check' : ''}" value="${todo.description}" readonly data-attribute="edit">
                </p>
            </td>
            <td class="iAlign"><span><i class="fa-solid fa-trash" data-attribute="remove"></i></span></td>
          </tr>
      `;
  });
};

export default displayToDo;