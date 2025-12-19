import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TodoDetails = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(res => res.json())
      .then(data => setTodo(data));
  }, [todoId]);

  if (!todo) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Todo ID: {todo.id}</h2>
      <h3>{todo.title}</h3>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};
export default TodoDetails;
