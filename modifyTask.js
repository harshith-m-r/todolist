function updateOnCheckBoxClick(para, divId, textStyle, status) {
  para.style.textDecoration = textStyle;
  taskObj[divId].isComplete = status;
  updateLocalStorage();
}

function strike(strikePara, chkBox, divId) {
  updateOnCheckBoxClick(strikePara, divId, 'line-through', true);
  chkBox.addEventListener('click', () => destrike(strikePara, chkBox, divId));
}

function destrike(destrikePara, chkBox, divId) {
  updateOnCheckBoxClick(destrikePara, divId, 'none', false);
  chkBox.addEventListener('click', () => strike(destrikePara, chkBox, divId));
}

function clrInputField() {
  domElems.inputField.value = '';
}

export { updateOnCheckBoxClick, strike, destrike, clrInputField };
