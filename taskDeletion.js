function removeTaskItem(item) {
  domElems.toDoContainer.removeChild(item);
}

function delTask(delDiv, divId) {
  removeTaskItem(delDiv);
  delete taskObj[divId];
  updateLocalStorage();
}

export { removeTaskItem, delTask };
