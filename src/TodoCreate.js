import React, { useState } from "react";

export default function TodoCreate({ addTodo }) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const handleName = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handleDescription = (e) => {
    setUserDescription(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== "") {
      addTodo(
        {
          id: 0,
          task: userName,
          description: userDescription,
          completed: false,
        },
      );
      setUserName('')
      setUserDescription('')
    }
  };
  return (
    <div style={{ margin: 20 }}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={handleName}></input>
        <input
          type="text"
          value={userDescription}
          onChange={handleDescription}
        ></input>
        <button> agregar tareas </button>
      </form>
    </div>
  );
}
