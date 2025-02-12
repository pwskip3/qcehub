export const THEME = {
    light: {
      background: "#ffffff",
      text: "#111827",
      primary: "#3b82f6",
    },
    dark: {
      background: "#111827",
      text: "#ffffff",
      primary: "#2563eb",
    },
  };
  
  export const getTheme = () => localStorage.getItem("qcehub_theme") || "dark";
  
  export const setTheme = (theme) => localStorage.setItem("qcehub_theme", theme);
  