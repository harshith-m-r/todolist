// // const textValue = document.querySelector(".newText").textContent;
// const clickBtn = document.querySelector(".btn");
// const textValue = console.log(document.querySelector(".newText").value);
// function addTask() {
//   // console.log(textValue);
//   // const textValue = document.querySelector(".newText").value; // had to go outside the function
//   var container = document.querySelector(".tasks-container");
//   var elem = document.createElement("div");
//   elem.setAttribute("class", "show-tasks");
//   elem.textContent = textValue;
//   container.appendChild(elem);
//   document.querySelector(".newText").value = "";
// }

// clickBtn.addEventListener("click", addTask);
// document.addEventListener("keydown", function (e) {
//   // e stands for event
//   // console.log('a key was pressed');
//   if (e.key === "Enter") {
//     addTask();
//   }
// });

(() => {
  let addToDoButton = document.querySelector(".addBtn");
  let toDoContainer = document.querySelector(".to-dos");
  let inputField = document.querySelector(".newText");
  // let allTasksCount = 0;
  // let completedTasksCount = 0;
  // let pendingTaksCount = 0;
  let i = 0;
  let taskArray = [];
  let isComplete = false;
  let taskName = "";

  function createTask() {
    // call the function createTask not createTask
    var paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;
    taskName = inputField.value;

    taskArray[i] = [Date.now(), taskName, isComplete];
    localStorage.setItem("Tasks", JSON.stringify(taskArray));
    // console.log(taskArray);

    paragraph.setAttribute("id", taskArray[i][0]);
    // console.log(i);
    // paragraph.addEventListener("click", () => strikeOff(uniqueId));    // striking off completed tasks
    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
      taskArray[isComplete] = true;
      // completedTasksCount += 1;
      // console.log("Completed tasks count : " + completedTasksCount);
    });

    // removing tasks on double click
    // paragraph.addEventListener("dblclick", function () {
    //   paragraph.style.textDecoration = "none";
    // });

    toDoContainer.appendChild(paragraph);
    // console.log("Total tasks count : " + ++allTasksCount);
    // document.querySelector(".taskcounter").value = ++allTasksCount;
    inputField.value = "";
    i += 1;
    // document.querySelector(".taskcounter").value =
    //   "Total Tasks : " + allTasksCount;
  }

  // function strikeOff(uniqueId) {
  //   var strikeParagraph = document.getElementById(uniqueId);
  //   strikeParagraph.style.textDecoration = "line-through";
  // }

  addToDoButton.addEventListener("click", () => createTask());
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      createTask();
    }
  });

  function getDataFromLocalStorage() {
    let taskData = JSON.parse(localStorage.getItem("Tasks"));
    console.log(taskData);
    // displayNewTasks(taskArray);
  }

  getDataFromLocalStorage();

  function displayNewTasks() {
    for (let j = 0; j <= taskArray.length; j++) {
      for (let k = 0; k <= j; k++) {
        console.log(taskArray[j][k]);
      }
    }
  }
})();
