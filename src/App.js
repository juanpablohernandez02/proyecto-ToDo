import { useState } from "react";
import "./App.css";
import data from "./data.json";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

function App() {
  const [todos, setTodos] = useState(data);

  const onComplete = (id) => {
    console.log("id de tarea", id);

    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };

  const onDeleteItem = (id) => {
    console.log("delete", id);
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo2) => {
    console.log("newTodo", newTodo2);
    newTodo2.id = todos.length + 1;
    setTodos([...todos, newTodo2]);
  };

  //prueba

  return (
    <div className="container">
      <h1>tarea de hoy</h1>
      <TodoCreate addTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
