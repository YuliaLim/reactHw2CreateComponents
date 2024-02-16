import { useState } from "react";
import Button from "./Button";

const Sort = (props) => {
  const { array, setArr } = props;
  const sortArray=array;
  const handleSortArrByPrice = () => {
   // const sortedByPrice = array;
   sortArray.sort(function (a, b) {
      return a.unitPrice - b.unitPrice;
    });
    setArr(sortArray);
  };
    const handleSortArrBySold = () => {
      //  const sortedBySold = array;
      sortArray.sort(function (a, b) {
        return a.soldOut - b.soldOut;
      });
      setArr(sortedBySold);
    };

  return (
    <ul>
      <li>
        <Button text="sort by price" handleClick={handleSortArrByPrice}></Button>
      </li>
      <li>
        <Button
          text="sort by ready to order"
          handleClick={handleSortArrBySold}
        ></Button>
      </li>
    </ul>
  );
};
export default Sort;
