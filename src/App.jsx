import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./Axios-pages/TodoList";
import TodoDetails from "./Axios-pages/TodoDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
