function updateLocalStorage() {
  localStorage.setItem('Tasks', JSON.stringify(taskObj));
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

export { updateLocalStorage, getDataFromLocalStorage, clrLocalStorage };
