import {
  getDataFromLocalStorage,
  updateDataInLocalStorage,
  clrLocalStorage,
} from './manageStorage.js';

// (() => {
const taskObj = {};
const app = document.querySelector('.app');

function clearDisplayedData() {
  let clearDispData = app.querySelector('.dispTask');
  clearDispData.innerText = '';
  domElems.toDoContainer.textContent = '';
}

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

function setAttr(elem, attr, val) {
  elem.setAttribute(attr, val);
}

function addingEventListener(elem, eventType, functionToCall) {
  elem.addEventListener(eventType, functionToCall);
}

function appendToDom(whereTo, elem) {
  whereTo.appendChild(elem);
}

function updateOnCheckBoxClick(para, divId, textStyle, status) {
  para.style.textDecoration = textStyle;
  taskObj[divId].isComplete = status;
  updateDataInLocalStorage();
}

function strike(strikePara, chkBox, divId) {
  updateOnCheckBoxClick(strikePara, divId, 'line-through', true);
  addingEventListener(chkBox, 'click', () =>
    destrike(strikePara, chkBox, divId)
  );
}

function destrike(destrikePara, chkBox, divId) {
  updateOnCheckBoxClick(destrikePara, divId, 'none', false);
  addingEventListener(chkBox, 'click', () =>
    strike(destrikePara, chkBox, divId)
  );
}

function clrInputField() {
  domElems.inputField.value = '';
}

function removeTaskItem(item) {
  domElems.toDoContainer.removeChild(item);
}

function delTask(delDiv, divId) {
  removeTaskItem(delDiv);
  delete taskObj[divId];
  updateDataInLocalStorage();
}

function createTaskSection(randId, task) {
  if (task) {
    const newTaskDiv = createElem('div');
    setAttr(newTaskDiv, 'id', randId);

    const paragraph = createElem('p');
    paragraph.innerText = task;

    const delTaskBtn = createElem('button');
    delTaskBtn.innerHTML = 'Delete';
    addingEventListener(delTaskBtn, 'click', () =>
      delTask(newTaskDiv, newTaskDiv.id)
    );

    const checkBox = createElem('input');
    setAttr(checkBox, 'type', 'checkbox');
    addingEventListener(checkBox, 'click', () =>
      strike(paragraph, checkBox, newTaskDiv.id)
    );

    appendToDom(newTaskDiv, paragraph);
    appendToDom(newTaskDiv, delTaskBtn);
    appendToDom(newTaskDiv, checkBox);
    appendToDom(domElems.toDoContainer, newTaskDiv);
    clrInputField();
  }
}

function createLocalObject(randId, task) {
  taskObj[randId] = {
    id: randId,
    taskName: task,
    isComplete: false,
  };
}

function createTask() {
  if (domElems.inputField.value) {
    const randomId = Date.now();
    const task = domElems.inputField.value;

    createTaskSection(randomId, task);
    createLocalObject(randomId, task);
    updateDataInLocalStorage();
  } else {
    alert('please enter something.!');
  }
}

function displayTasks() {
  const taskData = getDataFromLocalStorage();
  if (taskData) {
    for (const key in taskData) {
      if (taskData.hasOwnProperty.call(taskData, key)) {
        const taskDisplay = app.querySelector('.dispTask');
        dispTask = createElem('div');
        dispTask.innerText = taskData[key].taskName;
        taskDisplay.append(dispTask);
      }
    }
  } else {
    alert('The local storage is empty');
  }
}

function addOnClickOrOnEnter() {
  domElems.addToDoButton.addEventListener('click', createTask);
  app.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      createTask();
    }
  });
}

addingEventListener(domElems.dispBtn, 'click', displayTasks);
addingEventListener(domElems.clearLocalStorage, 'click', clrLocalStorage);

addOnClickOrOnEnter();
// })();
export { taskObj, clearDisplayedData };
