import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const baseStyle = {
  padding: "10px 20px",
  margin: "0 10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "2px solid #D6C57A",
  color: "#1B211A",
  cursor: "pointer",
  transition: "all 0.3s ease",
  fontWeight: "bold",
  animation: "shimmer 1.5s infinite alternate"
};

export default function ResetButton({ onClick }) {
  const { colors } = useContext(ThemeContext);
  return (
    <button
      onClick={onClick}
      style={{
        ...baseStyle,
        background: "linear-gradient(135deg, #FFB84D, #D6C57A)",
        boxShadow: `0 4px 12px ${colors.buttonShadow}`
      }}
    >
      🔄 Сброс
    </button>
  );
}
