import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LoginContext, LoginDispatchContext } from "../../context/LoginContext";
import {fetchLogin} from "../../context/loginContextHelper"
import "./login.css";

const Login = () => {
  //consume theme context
  const { theme } = useContext(ThemeContext);

  //consume the login context
  const login = useContext(LoginContext);
  const dispatch = useContext(LoginDispatchContext);

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setInput({
      ...input, //this keeps the prior entries so it doesn't overwrite them.
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="login" className={theme}>
      <h1>Login: </h1>
      {login.isAuth ? (
        <>
          <h2>{login.message}</h2>
          <button
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              setInput({ username: "", password: "" });
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <h2>{login.message}</h2>
          <label htmlFor="username">Username; </label>
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={onChangeHandler}
          />
          <label htmlFor="password">Password; </label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={onChangeHandler}
          />
          <button>Register: </button>
          <button
            onClick={()=>fetchLogin(dispatch, input)}>Log In
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
