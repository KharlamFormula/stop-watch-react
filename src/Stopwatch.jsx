import React, { useReducer, useEffect, useRef, useContext } from "react";
import { stopwatchReducer, initialState } from "./stopwatchReducer";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import ThemeToggleButton from "./ThemeToggleButton";
import { ThemeContext } from "./ThemeContext";

export default function Stopwatch() {
  const [state, dispatch] = useReducer(stopwatchReducer, initialState);
  const timerRef = useRef(null);
  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    if (state.isRunning) {
      timerRef.current = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    }
  
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [state.isRunning]);

  const minutes = String(Math.floor(state.time / 60)).padStart(2, "0");
  const seconds = String(state.time % 60).padStart(2, "0");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.background,
        color: colors.text,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        transition: "all 0.3s ease"
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { box-shadow: 0 0 8px rgba(214,197,122,0.4); }
          50% { box-shadow: 0 0 16px rgba(255,214,90,0.8); }
          100% { box-shadow: 0 0 8px rgba(214,197,122,0.4); }
        }
      `}</style>

      <ThemeToggleButton />
      <h1>Секундомір</h1>
      <h2
        style={{
          fontSize: "48px",
          textShadow: `0 0 10px ${colors.text}`,
          animation: "shimmer 1.5s infinite alternate"
        }}
      >
        {minutes}:{seconds}
      </h2>

      <div style={{ marginTop: "30px" }}>
        <StartButton onClick={() => dispatch({ type: "start" })} />
        <PauseButton onClick={() => dispatch({ type: "pause" })} />
        <ResetButton onClick={() => dispatch({ type: "reset" })} />
      </div>
    </div>
  );
}
