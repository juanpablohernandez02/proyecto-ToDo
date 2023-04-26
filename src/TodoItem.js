import React from "react";

export default function TodoItem({ todo, onComplete, onDeleteItem }) {
  const getStyle = () => {
    return {
      color: todo.completed ? "green" : "red",
      margin: "20px",
      border: "1px solid #ffffff",
      backgroundColor: "#CCF7E3",
    };
  };
  return (
    <div style={getStyle()}>
      <button className="delete-btn" onClick={() => onDeleteItem(todo.id) }>x</button>
      <input type='checkbox' checked = {todo.completed} onChange={() => onComplete(todo.id)}/>
      <h1>{todo.task}</h1>
      <p>{todo.description}</p>
    </div>
  );
}
