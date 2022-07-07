import React, { useState, useEffect } from "react";
import "./login.css";
import "./netflix.css";
import { Link, useHistory } from "react-router-dom";
import path from "./RoutingConstant";

const LogIn = () => {
  const history = useHistory();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, [history]);

  const logInData = async () => {
    // let item = { email, password };
    // const result = await fetch(
    //   "https://postman-echo.com/post/",
    //   { mode: "cors" },
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json ",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify(item),
    //   }
    // );
    // let response = await result.json();
    // console.log(response);
    // localStorage.setItem('result', JSON.stringify(result))
  };

  logInData();
  return (
    <div className="login">
      <h1 className="login__title">Sign In</h1>
      <div className="login__group">
        <input
          className="login__group__input"
          required
          type="text"
          placeholder="Email Address"
          // onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="login__group">
        <input
          className="login__group__input"
          required
          type="password"
          placeholder="password"
          // onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link
        className="login__sign-in"
        to={path.user}
        onClick={() => logInData()}
      >
        Sign In
      </Link>
      <div className="login__secondary-cta">
        <a className="login__secondary-cta__text" href="#">
          Remember me
        </a>
        <a className="login__secondary-cta__text login__secondary-cta__text--need-help">
          Need help?
        </a>
      </div>
    </div>
  );
};

export default LogIn;
