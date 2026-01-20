import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const baseStyle = {
  padding: "10px 10px",
  marginTop: "0px",
  fontSize: "16px",
  borderRadius: "20px",
  border: "2px solid #D6C57A",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "all 0.3s ease"
};

export default function ThemeToggleButton() {
  const { darkMode, toggleTheme, colors } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        ...baseStyle,
        background: darkMode ? "#333" : "#FFD966",
        color: darkMode ? "#FFD966" : "#1B211A",
        boxShadow: `0 4px 12px ${colors.buttonShadow}`
      }}
    >
      🌗 
    </button>
  );
}
