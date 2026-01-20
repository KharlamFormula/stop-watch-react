import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Stopwatch from "./Stopwatch";
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <Stopwatch />
    </ThemeProvider>
  );
}




