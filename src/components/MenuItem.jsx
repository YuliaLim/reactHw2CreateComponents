import { useState } from "react";
import Button from "./Button";
import PizzaCounter from "./PizzaCounter";

const MenuItem = (props) => {
  const { menuItem } = props;

  const [isVisibleCounter, setIsVisibleCounter] = useState(false);
  const handleShowCounter = () => setIsVisibleCounter(!isVisibleCounter);

  return (
    <div className="pizza">
      <img src={menuItem.imageUrl} className="pizza__image"></img>
      <div className="pizza__info">
        <p className="pizza__name">{menuItem.name}</p>

        <p className="pizza__ingredients">{menuItem.ingredients.join(", ")}</p>
        {menuItem.soldOut ? (
          <div className="pizza__actions">
            <p className="pizza__price pizza_soldOut">Sold out</p>
          </div>
        ) : (
          <div className="pizza__actions">
            <p className="pizza__price">€{menuItem.unitPrice}</p>
            {isVisibleCounter ? (
              <PizzaCounter setIsVisibleCounter={setIsVisibleCounter}></PizzaCounter>
            ) : (
              <Button
                text="Add to card"
                handleClick={handleShowCounter}
              ></Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default MenuItem;
