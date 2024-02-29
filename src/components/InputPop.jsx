import { useState } from "react";
import PopUp from "./PopUp";
const InputPop = (props) => {
  const { pattern, textPopUp, setConfirmField } = props;
  const [isShowPop, setIsShowPop] = useState(false);
  const [inputCoordinate, setInputCoordinate] = useState({});
  //const [confirm, setConfirm] = useState(false);
  const regExp = new RegExp(pattern);

  const handleChangeValue = (e) => {
    setInputCoordinate(e.target.getBoundingClientRect());
    if (regExp.test(e.target.value) === false) {
      setIsShowPop(true);
      // setConfirmField(false);
    } else {
      //setConfirm(true);
      setIsShowPop(false);

      //setConfirmField(true);
    }
  };
  // confirm && setConfirmField(true);

  return (
    <>
      <input
        placeholder="Enter your login"
        onChange={(e) => {
          handleChangeValue(e);
        }}
      ></input>
      {isShowPop && (
        <PopUp text={textPopUp} coordinates={inputCoordinate}></PopUp>
      )}
    </>
  );
};
export default InputPop;
