(() => {
  const taskObj = {};

  const domElems = {
    addToDoButton: document.querySelector('.addBtn'),
    toDoContainer: document.querySelector('.to-dos'),
    inputField: document.querySelector('.newText'),
  };

  let taskName = '';

  function createTask() {
    if (domElems.inputField.value === '') {
      alert('please enter something.!');
      return;
    }
    const paragraph = document.createElement('p');
    paragraph.innerText = domElems.inputField.value;
    taskName = domElems.inputField.value;

    taskObj[Date.now()] = {
      id: Date.now(),
      taskName: taskName,
      isComplete: false,
    };

    localStorage.setItem('Tasks', JSON.stringify(taskObj));
    // localStorage.setItem('ids', JSON.stringify(idArray));
    // console.log(taskArray);

    paragraph.addEventListener('click', function () {
      paragraph.style.textDecoration = 'line-through';
    });

    domElems.toDoContainer.appendChild(paragraph);
    domElems.inputField.value = '';
    // i += 1;
  }

  domElems.addToDoButton.addEventListener('click', createTask);
  document.addEventListener('keydown', function (e) {
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
  const dispBtn = document.querySelector('.displayTasks');
  dispBtn.addEventListener('click', getDataFromLocalStorage);

  function displayTasks(taskData) {
    if (!taskData) {
      alert('The local storage is empty');
      return;
    } else {
      // taskKeys.forEach((key) => {
      // let taskDisplay = document.querySelector('.dispTask');
      // dispTask = document.createElement('div');
      // dispTask.innerText = taskData[key].taskName;
      // taskDisplay.append(dispTask);
      // });

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
    }
  }
})();
