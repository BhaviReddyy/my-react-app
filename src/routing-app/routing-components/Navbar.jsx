import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};
export default Navbar;
