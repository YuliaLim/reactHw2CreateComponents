import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  addPizza,
  decrementPizza,
  deletePizza,
} from "../redux/slice/actionWithCountPizzaSlice";
const PizzaCounter = (props) => {
  const { setIsVisibleCounter, item, initCounter } = props;
  const [counter, setCounter] = useState(initCounter);
  const [itemMenu, setItemMenu] = useState(item);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    setCounter(counter + 1);
    dispatch(addPizza(itemMenu));
  };
  const handleDeincrement = () => {
    counter > 0 && setCounter(counter - 1);

    dispatch(decrementPizza(itemMenu.id));
  };
  const handleDeleteCounter = () => {
    setIsVisibleCounter && setIsVisibleCounter(false);
    dispatch(deletePizza(itemMenu.id));
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
