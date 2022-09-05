import { taskObj, clearDisplayedData } from './view.js';

export function updateDataInStorage() {
  localStorage.setItem('Tasks', JSON.stringify(taskObj));
}

export function getDataFromStorage() {
  return JSON.parse(localStorage.getItem('Tasks'));
}

export function clrStorage() {
  localStorage.clear();
  clearDisplayedData();
}
