import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={`${styles.app} ${styles[mode]}`}>
      <h1>My Profile</h1>

      <button onClick={toggleMode}>
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* Conditional Rendering */}
      {mode === "light" ? (
        <p>Light mode is active ☀️</p>
      ) : (
        <p>Dark mode is active 🌙</p>
      )}
    </div>
  );
}

export default App;
