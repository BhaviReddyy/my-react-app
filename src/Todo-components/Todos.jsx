import { TodoProvider } from "../todo-context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <TodoProvider>
      <h2>Todo App (Context API)</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default Todos;

