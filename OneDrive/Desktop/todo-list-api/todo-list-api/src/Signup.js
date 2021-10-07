import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  let history = useHistory();

  const register = async () => {
    
    let result = await fetch(
      "https://api-nodejs-todolist.herokuapp.com/user/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          age,
        }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log(error));
    localStorage.setItem("user-info", JSON.stringify(result));
    alert("Successfully Signed up");
    history.push("/login");
  };

  return (
    <div className="loginsignup">
      <h1>Register Page</h1>
      <br />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
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
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={register}>Signup</button>
    </div>
  );
};
export default Signup;
