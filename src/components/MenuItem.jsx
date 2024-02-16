import Button from "./Button";

const MenuItem = (props) => {
  const { menuItem } = props;
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
            <Button text="Add to card"></Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default MenuItem;
