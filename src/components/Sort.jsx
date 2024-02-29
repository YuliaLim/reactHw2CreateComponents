import { useEffect, useState } from "react";

const Sort = (props) => {
  const { array, setArr } = props;
  const [valueSelect, setValueSelect] = useState("");

  useEffect(() => {
    const handleSortBy = () => {
      if (valueSelect === "price") {
        const sortArray = [...array].sort(function (a, b) {
          return a.unitPrice - b.unitPrice;
        });
        setArr(sortArray);
      } else {
        const sortArray = [...array].sort(function (a, b) {
          return a.soldOut - b.soldOut;
        });
        setArr(sortArray);
      }
    };
    handleSortBy();
  }, [valueSelect]);

  return (
    <select
      onChange={(e) => {
        setValueSelect(e.target.value);
      }}
    >
      <option hidden>choose type of sort </option>
      <option value="price">sort by price</option>
      <option value="order">sort by ready to order</option>
    </select>
  );
};
export default Sort;
