import React from "react";
import { useHistory } from "react-router";
import ProjectsTitle from "./ProjectsTitle";
import TopNav from "./TopNav";
import TodoList from "./TodoList"

const InputContainer = () => {
  let history=useHistory()
  const addTodo=()=>{
    history.push('/add')
  }
  return (
    <div className="inputcontainer">
      <TopNav />
      <ProjectsTitle/>
      <h4>Todo</h4>
      <button onClick={addTodo}>Add</button>
      <TodoList/>
    </div>
  );
};

export default InputContainer;
