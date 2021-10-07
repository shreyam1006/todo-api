import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const login = async () => {
    let result = await fetch(
      "https://api-nodejs-todolist.herokuapp.com/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    ).then((res) => {
                
      return res.json()
    })
    result=JSON.stringify(result)

    localStorage.setItem("login-info", result);

    if (
      localStorage.getItem("login-info") === JSON.stringify("Unable to login")
    ) {
      alert("Incorrect email or password");
    } else {
      history.push("/home");
    }
  };
  return (
    <div className="loginsignup">
      <h1>Login Page</h1>
      <br />
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Login;
