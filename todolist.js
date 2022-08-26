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

  function updateLocalStorage() {
    localStorage.setItem('Tasks', JSON.stringify(taskObj));
  }

  function removeTaskItem(item) {
    domElems.toDoContainer.removeChild(item);
  }

  function delTask(delDiv, divId) {
    removeTaskItem(delDiv);
    delete taskObj[divId];
    updateLocalStorage();
  }

  function updateOnCheckBoxClick(para, divId, textStyle, status) {
    para.style.textDecoration = textStyle;
    taskObj[divId].isComplete = status;
    updateLocalStorage();
  }

  function strike(strikePara, chkBox, divId) {
    updateOnCheckBoxClick(strikePara, divId, 'line-through', true);
    chkBox.addEventListener('click', () => destrike(strikePara, chkBox, divId));
  }

  function destrike(destrikePara, chkBox, divId) {
    updateOnCheckBoxClick(destrikePara, divId, 'none', false);
    chkBox.addEventListener('click', () => strike(destrikePara, chkBox, divId));
  }

  function createElem(elem) {
    return document.createElement(elem);
  }

  function setAttrs(elem, attr, val) {
    return elem.setAttribute(`${attr}`, `${val}`);
  }

  function pushToDom(whereTo, elem) {
    return whereTo.appendChild(elem);
  }

  function clrInputField() {
    domElems.inputField.value = '';
  }

  function addEventListeners(elem, eventType, functionToCall) {
    return elem.addEventListener(eventType, functionToCall);
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

  function getDataFromLocalStorage() {
    const taskData = JSON.parse(localStorage.getItem('Tasks'));
    displayTasks(taskData);
    // }
  }

  function clrLocalStorage() {
    localStorage.clear();
    let clearDispData = app.querySelector('.dispTask');
    clearDispData.innerText = '';
    domElems.toDoContainer.textContent = '';
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

  function addEventInit() {
    domElems.addToDoButton.addEventListener('click', createTask);
    app.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        createTask();
      }
    });
  }

  addEventListeners(domElems.dispBtn, 'click', getDataFromLocalStorage);
  addEventListeners(domElems.clearLocalStorage, 'click', clrLocalStorage);

  addEventInit();
})();
