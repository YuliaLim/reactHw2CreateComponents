import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const {
    id,
    status,
    estimatedDelivery,
    cart,
    orderPrice,
    priority,
    priorityPrice,
  } = location.state.key;

  const reg = /T/g;
  const eDelivery = estimatedDelivery.replace(reg, " ");
  return (
    <div className="orderBox">
      <div className="commonInfo">
        <div>ORDER: #{id}</div>
        <div>Status: {status}</div>
        {priority && <div className="priority">PRIORITY</div>}
      </div>
      <div className="timeDelivery">Estimated delivery: {eDelivery} </div>
      <div className="order">
        {cart.map((item) => (
          <div key={item.id} className="orderItem">
            <div>
              {item.quantity}x{item.name}
            </div>
            <div>{item.totalPrice} €</div>
          </div>
        ))}
      </div>
      <div className="orderFooter">
        <div>Price pizza: € {orderPrice}</div>
        {priority && <div>Price priority: € {priorityPrice}</div>}
        <div>To pay on delivery: € {orderPrice + priorityPrice}</div>
      </div>
    </div>
  );
};
export default Order;
