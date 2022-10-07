import {
  getDataFromStorage,
  updateDataInStorage,
  clrStorage,
} from './manageStorage.js';

import { clearDisplayedData } from './view.js';

export function updateData(key, data) {
  updateDataInStorage(key, data);
}

export function getData() {
  getDataFromStorage();
}

export function clearStorage() {
  clrStorage();
  clearDisplayedData();
}
