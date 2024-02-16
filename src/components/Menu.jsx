import { useEffect, useState } from "react";
import MenuItem from "./menuItem";
import Button from "./Button";
// import Sort from "./Sort";

const Menu = ({ menu }) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
 // const [items, setItems] = useState(menu);
  const handleShowMenu = () => setIsVisibleMenu(!isVisibleMenu);

  return (
    <div className="pizza_menu">
      <Button text="Menu" handleClick={handleShowMenu}></Button>
      {/* <Sort array={menu} setArr={setItems}></Sort> */}
      {isVisibleMenu && (
        <div>
          <ul>
            {menu.map((menuItem) => (
              <li key={menuItem.id}>
                <MenuItem menuItem={menuItem}></MenuItem>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
