export const getUserSettings = () =>
    JSON.parse(localStorage.getItem("qcehub_settings")) || {};
  
  export const saveUserSettings = (settings) =>
    localStorage.setItem("qcehub_settings", JSON.stringify(settings));
  