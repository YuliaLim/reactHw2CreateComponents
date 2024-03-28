import { memo } from "react";
import PizzaCounter from "./PizzaCounter";

const CartForBasket = memo(({ item }) => {
  return (
    <div className="cartForBasket">
      <p className="basketPizzaName">
        {item.qty}x{item.name}
      </p>
      <p>€{item.unitPrice}</p>
      <PizzaCounter item={item} initCounter={item.qty}></PizzaCounter>
    </div>
  );
});
export default CartForBasket;
