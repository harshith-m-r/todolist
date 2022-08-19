(() => {
  // let taskContainer = document.querySelector(".tasks-taskContainer")
  // let addToDoButton = document.querySelector('.addBtn');
  // let toDoContainer = document.querySelector('.to-dos');
  // let inputField = document.querySelector('.newText');

  const taskObj = {};

  const domElems = {
    addToDoButton: document.querySelector('.addBtn'),
    toDoContainer: document.querySelector('.to-dos'),
    inputField: document.querySelector('.newText'),
  };
  // console.log(obj.addToDoButton);

  // let allTasksCount = 0;
  // let completedTasksCount = 0;
  // let pendingTaksCount = 0;

  // let i = 0;
  // let taskArray = [];
  let taskName = '';
  // let idArray = [];

  function createTask() {
    if (domElems.inputField.value === '') {
      alert('please enter something.!');
      return;
    }
    const paragraph = document.createElement('p');
    paragraph.innerText = domElems.inputField.value;
    taskName = domElems.inputField.value;

    // taskObj = {
    //   [Date.now()]: {
    //     id: Date.now(),
    //     taskName: taskName,
    //     isComplete: false,
    //   },
    // };

    taskObj[Date.now()] = {
      id: Date.now(),
      taskName: taskName,
      isComplete: false,
    };

    // idArray.push(Date.now());
    // paragraph.setAttribute('id', Date.now());
    // console.log(idArray);

    // taskArray[i] = {
    //   [Date.now()]: [Date.now(), taskName, isComplete],
    // };

    localStorage.setItem(`Tasks`, JSON.stringify(taskObj));
    // localStorage.setItem('ids', JSON.stringify(idArray));
    // console.log(taskArray);

    paragraph.addEventListener('click', function () {
      paragraph.style.textDecoration = 'line-through';
    });

    domElems.toDoContainer.appendChild(paragraph);
    domElems.inputField.value = '';
    // i += 1;
  }

  domElems.addToDoButton.addEventListener('click', () => createTask());
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      createTask();
    }
  });

  function getDataFromLocalStorage() {
    const taskData = JSON.parse(localStorage.getItem('Tasks'));
    // const idData = JSON.parse(localStorage.getItem('ids'));

    // console.log(taskData);
    // console.log(Object.keys(taskData));
    // for (let j = 0; j < idArray.length; j++) {
    //   let dispTask = document.querySelector('.to-dos');
    //   let task = document.createElement('div');
    //   task.textContent = taskData[j][idArray[j]][TaskName];
    // console.log(taskData[0][1660890425801].TaskName);
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
      // for (let j = 0; j < idData.length; j++) {
      //   let taskDisplay = document.querySelector('.dispTask');
      //   dispTask = document.createElement('div');
      //   dispTask.innerText = taskData[j][idData[j]].TaskName;
      //   taskDisplay.append(dispTask);
      // }
    }
  }
})();
