import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              padding: "20px",
              background: "#eee",
              borderRadius: "10px",
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
