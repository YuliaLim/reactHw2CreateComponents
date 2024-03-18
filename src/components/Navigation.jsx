import { NavLink } from "react-router-dom";
import { CiPizza } from "react-icons/ci";
import { BsFillBasketFill } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const Navigation = () => {
  return (
    <nav className="navPanel">
      <NavLink to="/login">
        Log in <CiLogin />
      </NavLink>
      <NavLink to="/register">
        My info <CiUser />
      </NavLink>
      <NavLink to="/menu">
        Menu <CiPizza />
      </NavLink>
      <NavLink to="/basket">
        <BsFillBasketFill />
      </NavLink>
    </nav>
  );
};

export default Navigation;
