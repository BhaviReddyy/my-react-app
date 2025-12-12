import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodosList() {
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(true);

  useEffect(() => {
    console.log("Fetching todos...");

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 15)));

    // Cleanup function
    return () => {
      alert("cleanup worked");
      console.log("Component unmounted — cleanup executed");
    };
  }, []);

  if (!showTodos) {
    return <h2>Todos Unmounted</h2>;
  }

  return (
    <div>
      <h1>Todo List</h1>

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;
