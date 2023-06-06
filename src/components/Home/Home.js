import React, { useContext } from "react";
import "./Home.css";

import { ThemeContext } from "../../context/ThemeContext"
import { LoginContext } from "../../context/LoginContext"

const Home = () => {
  const { theme, setTheme, changeTheme } = useContext(ThemeContext);

  const login = useContext(LoginContext);
  console.log(login.username)

  return (
    <div id="home" className={theme}>
      {login.isAuth ? (
        <>
          Welcome to Home: {login.username}
        </>
        ) : (
        <>
          No User Logged In
        </>
        )
      }
      <h4>{theme}</h4>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Home;
