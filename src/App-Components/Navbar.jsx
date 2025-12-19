import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "20px", background: "#222" }}>
      <NavLink to="/home" style={{ marginRight: "20px", color: "white" }}>Home</NavLink>
      <NavLink to="/aboutus" style={{ marginRight: "20px", color: "white" }}>About Us</NavLink>
      <NavLink to="/todos" style={{ marginRight: "20px", color: "white" }}>Todos</NavLink>
    </nav>
  );
};

export default Navbar;
