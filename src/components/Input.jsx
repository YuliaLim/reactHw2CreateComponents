import { useState } from "react";

const Input = (props) => {
  const { placeholder } = props;
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      placeholder={placeholder}
      onChange={(e) => {
        handleChangeValue(e);
      }}
    ></input>
  );
};

export default Input;
