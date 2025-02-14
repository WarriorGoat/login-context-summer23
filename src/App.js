import React, { useState } from "react";
import "./App.css";

import { ThemeContext } from "./context/ThemeContext";
import { LoginProvider } from "./context/LoginContext";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login"

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
        <LoginProvider>
          <Home />
          <Login />
        </LoginProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
