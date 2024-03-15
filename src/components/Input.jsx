import { useState } from "react";
import { useController } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const Input = (props) => {
  const { type = "text", placeholder, name, control } = props;
  const {
    field,
    fieldState:{error}
  } = useController({ name, control });

  return (
    <>
      <input type={type}
       placeholder={placeholder}
      {...field}
       />
      {error && <ErrorMessage message={error.message}></ErrorMessage>}
    </>
  );
};

export default Input;
