import { useEffect, useState } from "react";
import { getTodos } from "../api/todoService";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data.slice(0, 20)); // limiting to 20 for clean UI
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id} style={{ margin: "12px 0" }}>
          <Link to={`/todo/${todo.id}`}>
            <h3>{todo.title}</h3>
          </Link>
          <p>Status: {todo.completed ? "Completed ✅" : "Pending ❌"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
