(() => {
  const taskObj = {};

  const app = document.querySelector('.app');
  const domElems = {
    checkBox: app.querySelector('checkBox'),
    addToDoButton: app.querySelector('.addBtn'),
    // toDoContainer: app.querySelector('.to-dos'),
    toDoContainer: app.querySelector('.tasks-container'),
    inputField: app.querySelector('.newText'),
  };

  let taskName = '';

  function delTask(delPara, delBtn, chkBox) {
    domElems.toDoContainer.removeChild(delPara);
    domElems.toDoContainer.removeChild(delBtn);
    domElems.toDoContainer.removeChild(chkBox);
  }

  function strike(strikePara, chkBox) {
    strikePara.style.textDecoration = 'line-through';
    chkBox.addEventListener('click', () => destrike(strikePara, chkBox));
  }

  function destrike(destrikePara, chkBox) {
    destrikePara.style.textDecoration = 'none';
    chkBox.addEventListener('click', () => strike(destrikePara, chkBox));
  }

  function createTask() {
    if (domElems.inputField.value) {
      const paragraph = document.createElement('p');
      paragraph.innerText = domElems.inputField.value;
      taskName = domElems.inputField.value;
      // paragraph.addEventListener('click', strike(paragraph));

      const delTaskBtn = document.createElement('button');
      delTaskBtn.innerHTML = 'Delete';
      delTaskBtn.addEventListener('click', () =>
        delTask(paragraph, delTaskBtn, checkBox)
      );

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.addEventListener('click', () => strike(paragraph, checkBox));
      // checkBox.setAttribute('class', '');

      let randomId = Date.now();
      taskObj[randomId] = {
        id: randomId,
        taskName: taskName,
        isComplete: false,
      };

      localStorage.setItem('Tasks', JSON.stringify(taskObj));

      // paragraph.addEventListener('click', function () {
      //   paragraph.style.textDecoration = 'line-through';
      // });

      domElems.toDoContainer.appendChild(paragraph);
      domElems.toDoContainer.appendChild(delTaskBtn);
      domElems.toDoContainer.appendChild(checkBox);
      domElems.inputField.value = '';
      // i += 1;
    } else {
      alert('please enter something.!');
      return;
    }
  }

  app.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      createTask();
    }
  });

  function getDataFromLocalStorage() {
    const taskData = JSON.parse(localStorage.getItem('Tasks'));
    // const idData = JSON.parse(localStorage.getItem('ids'));
    displayTasks(taskData);
    // }
  }

  function clrLocalStorage() {
    localStorage.clear();
    // location.reload(true);
    let clearDispData = app.querySelector('.dispTask');
    clearDispData.innerText = '';
    domElems.toDoContainer.textContent = '';
  }

  function displayTasks(taskData) {
    if (taskData) {
      for (const key in taskData) {
        if (taskData.hasOwnProperty.call(taskData, key)) {
          // const element = taskData[key];
          // console.log(element);
          const taskDisplay = document.querySelector('.dispTask');
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

  domElems.addToDoButton.addEventListener('click', createTask);

  const dispBtn = document.querySelector('.displayTasks');
  dispBtn.addEventListener('click', getDataFromLocalStorage);

  const clearLocalStorage = document.querySelector('.clearLocalStorage');
  clearLocalStorage.addEventListener('click', clrLocalStorage);
})();
