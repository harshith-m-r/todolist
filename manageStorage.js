import { taskObj, clearDisplayedData } from './todolist.js';

export function updateDataInLocalStorage() {
  localStorage.setItem('Tasks', JSON.stringify(taskObj));
}

export function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem('Tasks'));
}

export function clrLocalStorage() {
  localStorage.clear();
  clearDisplayedData();
}
