import { useEffect, useState } from "react";
import MenuItem from "../components/menuItem";
import Button from "../components/Button";
import Sort from "../components/Sort";

const Menu = () => {
  //const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  //const handleShowMenu = () => setIsVisibleMenu(!isVisibleMenu);

  const [menu, setMenu] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const responce = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!responce.ok) {
          throw new Error("Error responce");
        }
        const { data } = await responce.json();
        setMenu(data);
      } catch (e) {
        setError(e.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      {error ? (
        <div className="errorDiv">{error} </div>
      ) : (
        <div className="pizza_menu">
          <div className="pizza_list">
            <Sort array={menu} setArr={setMenu}></Sort>
            <ul>
              {menu.map((menuItem) => (
                <li key={menuItem.id}>
                  <MenuItem menuItem={menuItem}></MenuItem>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
