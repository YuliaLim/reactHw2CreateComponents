import { useContext, useState } from "react";
import Button from "./Button";
import PizzaCounter from "./PizzaCounter";
import { useSelector } from "react-redux";
//import { PizzaItemContext } from "../context/PizzaItemProvider"; //for useReducer

const MenuItem = (props) => {
  const { menuItem } = props;
  const state= useSelector(state=>state.actionWithPizza);

 // const { state } = useContext(PizzaItemContext); //for useReducer
  let pizzaQty = state.items.filter((item) => item.id === menuItem.id);
  const [isVisibleCounter, setIsVisibleCounter] = useState(
    pizzaQty.length ? true : false
  );
  const handleShowCounter = () => setIsVisibleCounter(true);

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
              <PizzaCounter
                setIsVisibleCounter={setIsVisibleCounter}
                item={menuItem}
                initCounter={pizzaQty.length ? pizzaQty[0].qty : 0}
              ></PizzaCounter>
              
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
