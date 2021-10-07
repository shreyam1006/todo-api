import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [accessToken, setAccessToken] = useState('');
  const [allTasks, setAllTasks] = useState([]);

  useEffect(async() => {
    const loginInfo = await JSON.parse(localStorage.getItem('login-info'));
    setAccessToken(loginInfo.token);
    const bearer = 'Bearer ' + accessToken;
     await fetch('https://api-nodejs-todolist.herokuapp.com/task', {
      method: "GET",
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllTasks(data.data)
      })
      .catch((error) => error)
  }, [accessToken]);

  console.log(allTasks)

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
