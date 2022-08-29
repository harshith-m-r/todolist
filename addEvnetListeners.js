function addEventListeners(elem, eventType, functionToCall) {
  return elem.addEventListener(eventType, functionToCall);
}
function addEventInit() {
  domElems.addToDoButton.addEventListener('click', createTask);
  app.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      createTask();
    }
  });
}
export { addEventInit, addEventListeners };
