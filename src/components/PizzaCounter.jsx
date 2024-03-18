import { useContext, useState } from "react";
import Button from "./Button";
import { PizzaItemContext } from "../context/PizzaItemProvider";
const PizzaCounter = (props) => {
  const { setIsVisibleCounter, item, initCounter } = props;
  const [counter, setCounter] = useState(initCounter);
  const [itemMenu, setItemMenu] = useState(item);
  const { dispatch } = useContext(PizzaItemContext);

  const handleIncrement = () => {
    setCounter(counter + 1);
    dispatch({
      type: "ADD_PIZZA",
      payload: item,
    });
  };
  const handleDeincrement = () => {
    counter > 0 && setCounter(counter - 1);
    dispatch({
      type: "DECREMENT_PIZZA",
      payload: itemMenu.id,
    });
  };
  const handleDeleteCounter = () => {
    setIsVisibleCounter(false);
    dispatch({
      type: "DELETE_PIZZA",
      payload: itemMenu.id,
    });
  };

  return (
    <div className="pizzaCounter">
      <Button text="-" handleClick={handleDeincrement}></Button>
      <div className="showCounter">{counter}</div>
      <div className="showCounter"></div>
      <Button text="+" handleClick={handleIncrement}></Button>
      <Button text="Delete" handleClick={handleDeleteCounter}></Button>
    </div>
  );
};
export default PizzaCounter;
