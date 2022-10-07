export function updateDataInStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getDataFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function clrStorage() {
  localStorage.clear();
}
