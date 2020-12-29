export const localStorageSetItemUtil = (destinationName, data) =>
  localStorage.setItem(`${destinationName}`, JSON.stringify(data));

export const localStorageGetItemUtil = (destinationName) =>
  localStorage.getItem(destinationName)
    ? JSON.parse(localStorage.getItem(destinationName))
    : [];
