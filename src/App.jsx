import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./routing-app/routing-components/Navbar";
import ProtectedRoute from "./routing-app/routing-components/ProtectedRoute";

import Home from "./routing-app/pages/Home";
import Login from "./routing-app/pages/Login";
import Todos from "./routing-app/pages/Todos";
import TodoDetails from "./routing-app/pages/TodoDetails";
import NotFound from "./routing-app/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/todos/:todoId"
          element={
            <ProtectedRoute>
              <TodoDetails />
            </ProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
