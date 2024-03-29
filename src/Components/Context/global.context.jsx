import { createContext, useContext, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "" : "dark";
      console.log("Nuevo tema:", newTheme);
      return newTheme;
    });
  };

  return (
    <ContextGlobal.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useTheme = () => useContext(ContextGlobal);
