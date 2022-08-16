// const textValue = document.querySelector(".newText").textContent;
const clickBtn = document.querySelector(".btn");
const textValue = console.log(document.querySelector(".newText").value);
function addTask() {
  // console.log(textValue);
  // const textValue = document.querySelector(".newText").value; // had to go outside the function
  var container = document.querySelector(".tasks-container");
  var elem = document.createElement("div");
  elem.setAttribute("class", "show-tasks");
  elem.textContent = textValue;
  container.appendChild(elem);
  document.querySelector(".newText").value = "";
}

clickBtn.addEventListener("click", addTask);
document.addEventListener("keydown", function (e) {
  // e stands for event
  // console.log('a key was pressed');
  if (e.key === "Enter") {
    addTask();
  }
});

//js file ends here
