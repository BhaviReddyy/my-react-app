import { useContext } from "react";
import { TodoContext } from "../todo-context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div>
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;

