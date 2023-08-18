import { useState, createContext, useContext } from "react";

const ThemeChanger = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    return(
        <ThemeChanger.Provider 
         value={{ theme, toggleTheme: ()=> setTheme( theme === "light" ? "dark":"light")}}
        >
            {children}
        </ThemeChanger.Provider>
    );
};

export const useTheme = () =>useContext(ThemeChanger);