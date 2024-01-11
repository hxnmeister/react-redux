export const setToken = (value) => localStorage.setItem('authToken', value);
export const getToken = () => localStorage.getItem('authToken');
export const removeToken = () => localStorage.removeItem('authToken');
