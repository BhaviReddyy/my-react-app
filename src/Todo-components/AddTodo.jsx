import { useContext, useState } from "react";
import { TodoContext } from "../todo-context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={() => {
        addTodo(title);
        setTitle("");
      }}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
