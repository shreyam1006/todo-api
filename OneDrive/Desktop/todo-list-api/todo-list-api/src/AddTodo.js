import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const AddTodo = () => {
  const [description, setDescription] = useState("");
  const [accessToken, setAccessToken] = useState("");
  let history = useHistory();

  useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem("login-info"));
    setAccessToken(loginInfo.token);
  }, [accessToken]);

  const bearer = "Bearer " + accessToken;

  const buttonClick = async () => {
    await fetch("https://api-nodejs-todolist.herokuapp.com/task", {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    }).then((res) => {
      return res.json();
    });
    alert("Todo Added");
    history.push("/home");
  }


  return (
    <div className="loginsignup">
      <h1>Add Todo</h1>
      <br />
      <input
        type="textarea"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={buttonClick}>Add</button>
    </div>
  );
};

export default AddTodo;
