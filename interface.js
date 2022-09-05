import {
  getDataFromStorage,
  updateDataInStorage,
  clrStorage,
} from './manageStorage.js';

export function updateDataInLocalStorage() {
  updateDataInStorage();
}

export function getDataFromLocalStorage() {
  getDataFromStorage();
}

export function clrLocalStorage() {
  clrStorage();
}
