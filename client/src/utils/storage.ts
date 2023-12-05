export const addToStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getFromStorage = (key: string) => {
  return localStorage.getItem(key) || null;
};

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};
