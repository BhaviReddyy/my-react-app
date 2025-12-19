import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./App-Components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/todos" element={<Todos />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
