(() => {
  let addToDoButton = document.querySelector('.addBtn');
  let toDoContainer = document.querySelector('.to-dos');
  let inputField = document.querySelector('.newText');
  // let allTasksCount = 0;
  // let completedTasksCount = 0;
  // let pendingTaksCount = 0;
  let i = 0;
  let taskArray = [];
  let isComplete = false;
  let taskName = '';

  function createTask() {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    taskName = inputField.value;

    taskArray[i] = [Date.now(), taskName, isComplete];
    localStorage.setItem('Tasks', JSON.stringify(taskArray));
    // console.log(taskArray);

    paragraph.setAttribute('id', taskArray[i][0]);
    // console.log(i);
    paragraph.addEventListener('click', function () {
      paragraph.style.textDecoration = 'line-through'; //striking off on a single click
    });

    toDoContainer.appendChild(paragraph);
    inputField.value = '';
    i += 1;
  }

  addToDoButton.addEventListener('click', () => createTask());
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      createTask();
    }
  });

  function getDataFromLocalStorage() {
    let taskData = JSON.parse(localStorage.getItem('Tasks'));
    console.log(taskData);
    // displayNewTasks(taskArray);
  }

  // getDataFromLocalStorage();
  function displayNewTasks() {}
})();
