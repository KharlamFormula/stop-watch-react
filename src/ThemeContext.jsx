import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const theme = {
    darkMode,
    toggleTheme,
    colors: darkMode
      ? { background: "#1B211A", text: "#FFD966", buttonShadow: "rgba(255,214,90,0.6)" }
      : { background: "#EEECE6", text: "#1B211A", buttonShadow: "rgba(214,197,122,0.4)" }
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
