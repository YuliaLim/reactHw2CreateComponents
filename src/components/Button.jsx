const Button = (props) => {
  const { text, handleClick, type, disabledButtton } = props;

  return (
    <button onClick={handleClick} type={type} disabled={disabledButtton}>
      {text}
    </button>
  );
};

export default Button;
