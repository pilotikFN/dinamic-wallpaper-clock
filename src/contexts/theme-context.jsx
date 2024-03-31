import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
   // const backgroundWallpaper =
   //    localStorage.getItem("wallpaper") || "../../assets/background.jpg";

   const [theme, setTheme] = useState({
      wallpaper: localStorage.getItem("wallpaper"),
   });

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeContextProvider;

export const useThemeContext = () => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error(
         "useThemeContext should be used within ThemeContextProvider"
      );
   }
   return context;
};
