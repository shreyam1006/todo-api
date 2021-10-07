import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [allTasks, setAllTasks] = useState(null);

  useEffect(() => {
    

    const fetchMyAPI=async()=>{
      const token = JSON.parse(localStorage.getItem('login-info')).token;
    setAccessToken(token)
      let response=await fetch('https://api-nodejs-todolist.herokuapp.com/task', {
        method: "GET",
        headers: {
          'Authorization': 'Bearer '+accessToken,
          'Content-Type': 'application/json',
        },
      })
      response= await response.json()
      setAllTasks(response.data)
    }

    fetchMyAPI()
  }, [accessToken]);

  return (
    <div>
      <ul>
        {allTasks.map(task=>
            <li key={task._id} >{task.description}</li>)}
      </ul>
      <h3>In Progress</h3>
      <ul>
          {allTasks.filter(task=>task.completed===false).map(task=><li key={task._id} >{task.description}</li>)}
       
      </ul>
      <h3>Completed</h3>
      <ul>
          {allTasks.filter(task=>task.completed===true).map(task=><li key={task._id} >{task.description}</li>)}
       
      </ul>
    </div>
  );
};

export default TodoList;
