import { createContext, useContext, useState } from "react";

export const initialState = { theme: "" 
, data: [] };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
  };
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

// Hook personalizado para acceder al contexto del tema

export const useTheme = () => useContext(ContextGlobal);
