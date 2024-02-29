import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navPanel">
      <NavLink to="/login">Login Page</NavLink>
      <NavLink to="/menu">Menu</NavLink>
    </nav>
  );
};

export default Navigation;
