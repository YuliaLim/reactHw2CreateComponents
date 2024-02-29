const PopUp = (props) => {
  const { text, coordinates } = props;
  return (
    <div className="popUp" style={{ top: coordinates.y + 30 }}>
      {text}
    </div>
  );
};

export default PopUp;
