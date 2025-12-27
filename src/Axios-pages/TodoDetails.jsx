import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoById } from "../api/todoService";

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getTodoById(id);
      setTodo(data);
    };
    fetchTodo();
  }, [id]);

  if (!todo) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Todo Details</h1>
      <h2>ID: {todo.id}</h2>
      <p><strong>Title:</strong> {todo.title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {todo.completed ? "Completed ✅" : "Pending ❌"}
      </p>
    </div>
  );
};

export default TodoDetails;
