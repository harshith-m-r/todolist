import {
  updateLocalStorage,
  getDataFromLocalStorage,
  clrLocalStorage,
} from './manageStorage';
import {
  updateLocalStorage,
  getDataFromLocalStorage,
  clrLocalStorage,
} from './taskDeletion';
import {
  updateLocalStorage,
  getDataFromLocalStorage,
  clrLocalStorage,
} from './modifyTask';
import { addEventInit, addEventListeners } from './addEvnetListeners';

(() => {
  const taskObj = {};
  const app = document.querySelector('.app');

  const domElems = {
    checkBox: app.querySelector('.checkBox'),
    addToDoButton: app.querySelector('.addBtn'),
    toDoContainer: app.querySelector('.tasks-container'),
    inputField: app.querySelector('.newText'),
    countersContainer: app.querySelector('.counters-container'),
    dispBtn: app.querySelector('.displayTasks'),
    clearLocalStorage: app.querySelector('.clearLocalStorage'),
  };

  function createElem(elem) {
    return document.createElement(elem);
  }

  function setAttrs(elem, attr, val) {
    return elem.setAttribute(`${attr}`, `${val}`);
  }

  function pushToDom(whereTo, elem) {
    return whereTo.appendChild(elem);
  }

  function buildTaskSection(randId) {
    if (domElems.inputField.value) {
      const newTaskDiv = createElem('div');
      setAttrs(newTaskDiv, 'id', randId);

      const paragraph = createElem('p');
      paragraph.innerText = domElems.inputField.value;

      const delTaskBtn = createElem('button');
      delTaskBtn.innerHTML = 'Delete';
      addEventListeners(delTaskBtn, 'click', () =>
        delTask(newTaskDiv, newTaskDiv.id)
      );

      const checkBox = createElem('input');
      setAttrs(checkBox, 'type', 'checkbox');
      addEventListeners(checkBox, 'click', () =>
        strike(paragraph, checkBox, newTaskDiv.id)
      );

      pushToDom(newTaskDiv, paragraph);
      pushToDom(newTaskDiv, delTaskBtn);
      pushToDom(newTaskDiv, checkBox);
      pushToDom(domElems.toDoContainer, newTaskDiv);
      clrInputField();
    }
  }

  function buildLocalObject(randId, task) {
    taskObj[randId] = {
      id: randId,
      taskName: task,
      isComplete: false,
    };
  }

  function createTask() {
    if (domElems.inputField.value) {
      const randomId = Date.now();
      task = domElems.inputField.value;

      buildTaskSection(randomId);
      buildLocalObject(randomId, task);
      updateLocalStorage();
    } else {
      alert('please enter something.!');
      return;
    }
  }

  function displayTasks(taskData) {
    // console.log(Object.keys(taskData));
    if (taskData) {
      for (const key in taskData) {
        if (taskData.hasOwnProperty.call(taskData, key)) {
          const taskDisplay = app.querySelector('.dispTask');
          dispTask = document.createElement('div');
          dispTask.innerText = taskData[key].taskName;
          taskDisplay.append(dispTask);
        }
      }
    } else {
      alert('The local storage is empty');
      return;
    }
  }

  addEventListeners(domElems.dispBtn, 'click', getDataFromLocalStorage);
  addEventListeners(domElems.clearLocalStorage, 'click', clrLocalStorage);

  addEventInit();
})();
