import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h2>Todos</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {todos.map(todo => (
          <Link
            key={todo.id}
            to={`/todos/${todo.id}`}
            style={{ padding: "20px", background: "#eee", borderRadius: "10px" }}
          >
            <h4>{todo.title}</h4>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Todos;
