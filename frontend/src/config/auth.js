import jwtDecode from "jwt-decode";

export const getToken = () => localStorage.getItem("qcehub_token");

export const setToken = (token) => localStorage.setItem("qcehub_token", token);

export const removeToken = () => localStorage.removeItem("qcehub_token");

export const getUser = () => {
  const token = getToken();
  return token ? jwtDecode(token) : null;
};

export const isAuthenticated = () => !!getToken();
