import { useState } from "react";
import Button from "./Button";
const PizzaCounter = (props) => {
  const {setIsVisibleCounter} = props;
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDeincrement = () => {
    counter > 0 && setCounter(counter - 1);
  };
  const handleDeleteCounter = () => {
    setIsVisibleCounter(false);
  };

  return (
    <div className="pizzaCounter">
      <Button text="-" handleClick={handleDeincrement}></Button>
      <div className="showCounter">{counter}</div>
      <Button text="+" handleClick={handleIncrement}></Button>
      <Button text="Delete" handleClick={handleDeleteCounter}></Button>
    </div>
  );
};
export default PizzaCounter;
