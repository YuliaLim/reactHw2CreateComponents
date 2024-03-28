import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartForBasket from "../components/CartForBasket";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza } from "../redux/slice/actionWithCountPizzaSlice";
//import { PizzaItemContext } from "../context/PizzaItemProvider"; //for useReducer
//import { useContext } from "react"; //for useReducer
const Basket = () => {
  const navigate = useNavigate();
  const navigateToMenu = () => {
    navigate("/menu");
  };
  const navigateToUserInfo = () => {
    navigate("/register");
  };
  //const { state } = useContext(PizzaItemContext); //for useReducer
  
  const state = useSelector((state) => state.actionWithPizza);
  const dispatch = useDispatch();
  const handleClearBasket = () =>  {state.items.map((menuItem) => (
    dispatch(deletePizza(menuItem.id))
  ))};
  return (
    <div className="basket">
      <p className="tittleBasket">You cart</p>
      {state.items.length ? (
        <div>
          <ul>
            {state.items.map((menuItem) => (
              <li key={menuItem.id}>
                <CartForBasket item={menuItem}></CartForBasket>
              </li>
            ))}
          </ul>
          <Button text="ORDER PIZZAS" handleClick={navigateToUserInfo}></Button>
          <Button text="CLEAR CART" handleClick={handleClearBasket}></Button>
        </div>
      ) : (
        <div className="emptyBasket">
          You basket is empty. Create your order in menu
          <div>
            <Button text="Back to menu" handleClick={navigateToMenu}></Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Basket;
