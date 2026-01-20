export const initialState = { time: 0, isRunning: false };

export function stopwatchReducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "pause":
      return { ...state, isRunning: false };
    case "reset":
      return { time: 0, isRunning: false };
    case "tick":
      return state.isRunning ? { ...state, time: state.time + 1 } : state;
    default:
      return state;
  }
}
