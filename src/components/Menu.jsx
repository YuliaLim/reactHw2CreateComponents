import { useState } from "react";
import MenuItem from "./menuItem";
import Button from "./Button";

const Menu = ({ menu }) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const handleShowMenu = () => setIsVisibleMenu(!isVisibleMenu);
  return (
    <div className="pizza_menu">
      <Button text="Menu" handleClick={handleShowMenu}></Button>
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
