(() => {
  // let totalTasks = 0;
  // let completedTasks = 0;
  // let pendingTasks = 0;
  const taskObj = {};
  let taskName = '';
  const app = document.querySelector('.app');

  const domElems = {
    checkBox: app.querySelector('checkBox'),
    addToDoButton: app.querySelector('.addBtn'),
    // toDoContainer: app.querySelector('.to-dos'),
    toDoContainer: app.querySelector('.tasks-container'),
    inputField: app.querySelector('.newText'),
    countersContainer: app.querySelector('.counters-container'),
  };

  function updateLocalStorage() {
    localStorage.setItem('Tasks', JSON.stringify(taskObj));
  }

  function delTask(delPara, delBtn, chkBox, paraId) {
    domElems.toDoContainer.removeChild(delPara);
    domElems.toDoContainer.removeChild(delBtn);
    domElems.toDoContainer.removeChild(chkBox);
    delete taskObj[paraId];
    updateLocalStorage();
  }

  function strike(strikePara, chkBox, paraId) {
    strikePara.style.textDecoration = 'line-through';
    taskObj[paraId].isComplete = true;
    updateLocalStorage();
    chkBox.addEventListener('click', () =>
      destrike(strikePara, chkBox, paraId)
    );
  }

  function destrike(destrikePara, chkBox, paraId) {
    destrikePara.style.textDecoration = 'none';
    taskObj[paraId].isComplete = false;
    updateLocalStorage();
    chkBox.addEventListener('click', () =>
      strike(destrikePara, chkBox, paraId)
    );
  }

  // function buildTaskSection() {
  //   if (domElems.inputField.value) {
  //     const paragraph = document.createElement('p');
  //     paragraph.innerText = domElems.inputField.value;
  //     taskName = domElems.inputField.value;
  //     paragraph.setAttribute('id', randomId);

  //     const delTaskBtn = document.createElement('button');
  //     delTaskBtn.innerHTML = 'Delete';
  //     delTaskBtn.addEventListener('click', () =>
  //       delTask(paragraph, delTaskBtn, checkBox, paragraph.id)
  //     );

  //     const checkBox = document.createElement('input');
  //     checkBox.setAttribute('type', 'checkbox');
  //     checkBox.addEventListener('click', () =>
  //       strike(paragraph, checkBox, paragraph.id)
  //     );

  //     domElems.toDoContainer.appendChild(paragraph);
  //     domElems.toDoContainer.appendChild(delTaskBtn);
  //     domElems.toDoContainer.appendChild(checkBox);
  //   }
  // }

  // function buildLocalObject() {
  //   const randomId = Date.now();
  //   taskObj[randomId] = {
  //     id: randomId,
  //     taskName: domElems.inputField.value,
  //     isComplete: false,
  //   };
  //   updateLocalStorage();
  // }

  function createTask() {
    if (domElems.inputField.value) {
      const paragraph = document.createElement('p');
      paragraph.innerText = domElems.inputField.value;
      taskName = domElems.inputField.value;
      paragraph.setAttribute('id', randomId);

      const randomId = Date.now();
      taskObj[randomId] = {
        id: randomId,
        taskName: taskName,
        isComplete: false,
      };
      updateLocalStorage();

      const delTaskBtn = document.createElement('button');
      delTaskBtn.innerHTML = 'Delete';
      delTaskBtn.addEventListener('click', () =>
        delTask(paragraph, delTaskBtn, checkBox, paragraph.id)
      );

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.addEventListener('click', () =>
        strike(paragraph, checkBox, paragraph.id)
      );

      // paragraph.addEventListener('click', function () {
      //   paragraph.style.textDecoration = 'line-through';
      // });

      domElems.toDoContainer.appendChild(paragraph);
      domElems.toDoContainer.appendChild(delTaskBtn);
      domElems.toDoContainer.appendChild(checkBox);
      domElems.inputField.value = '';

      totalTasks++;
      // console.log(
      //   `Total tasks : ${totalTasks} Pending Tasks : ${pendingTasks} Completed Tasks : ${completedTasks}`
      // );
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

  // function getDataFromLocalStorage() {
  //   displayTasks(taskObj);
  //   // }
  // }

  function clrLocalStorage() {
    localStorage.clear();
    let clearDispData = app.querySelector('.dispTask');
    clearDispData.innerText = '';
    domElems.toDoContainer.textContent = '';
  }

  function displayTasks(taskObj) {
    // console.log(Object.keys(taskObj));
    if (taskObj) {
      for (const key in taskObj) {
        if (taskObj.hasOwnProperty.call(taskObj, key)) {
          const taskDisplay = document.querySelector('.dispTask');
          dispTask = document.createElement('div');
          dispTask.innerText = taskObj[key].taskName;
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
  dispBtn.addEventListener('click', displayTasks);

  const clearLocalStorage = document.querySelector('.clearLocalStorage');
  clearLocalStorage.addEventListener('click', clrLocalStorage);
})();
