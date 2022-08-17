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

let addToDoButton = document.querySelector(".addBtn");
let toDoContainer = document.querySelector("#toDoContainer");
let inputField = document.querySelector(".newText");
var allTasksCount = 0;
var completedTasksCount = 0;
var pendingTaksCount = 0;
let i = 0;

function createTasks(uniqueId) {
  var paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  paragraph.setAttribute("id", uniqueId);
  // console.log(i);
  // paragraph.addEventListener("click", () => strikeOff(uniqueId));

  // striking off completed tasks
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    completedTasksCount += 1;
    console.log("Completed tasks count : " + completedTasksCount);
  });

  // removing tasks on double click
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });

  toDoContainer.appendChild(paragraph);
  console.log("Total tasks count : " + ++allTasksCount);
  inputField.value = "";
  i += 1;
}

// function strikeOff(uniqueId) {
//   var strikeParagraph = document.getElementById(uniqueId);
//   strikeParagraph.style.textDecoration = "line-through";
// }

addToDoButton.addEventListener("click", () => createTasks(i));
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createTasks(i);
  }
});
