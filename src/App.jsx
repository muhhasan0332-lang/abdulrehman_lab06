import React, { useContext } from "react";
import User from "./components/User";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>React State Management</h1>

      <p>
        Context API and Redux State Management
      </p>

      <div className="container">
        <User />
        <Counter />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
