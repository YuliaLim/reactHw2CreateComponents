import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import InputPop from "../components/InputPop";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    navigate("/menu");
  };
  // const [confirmLogin, setConfirmLogin] = useState(false);
  // const [confirmPassword, setConfirmPassword] = useState(false);
  // const [disabledButtton, setDisabledButton] = useState(true);
  // if (confirmLogin && confirmPassword) {
  //   setDisabledButton(false);
  // }
  return (
    <form onSubmit={handleSubmitForm} className="loginForm">
      <InputPop
        placeholder="Enter your login"
        pattern="[a-z, A-Z]{6,}"
        textPopUp="Login must consist min 6 letters"
        // setConfirmField={setConfirmLogin}
      ></InputPop>
      <InputPop
        placeholder="Enter your password"
        pattern="[0-9]{6,}"
        textPopUp="Password must consist min 6 numbers"
        // setConfirmField={setConfirmPassword}
      ></InputPop>
      {/* {confirmLogin && confirmPassword
        ? setDisabledButton(false)
        : setDisabledButton(true)} */}
      <Button
        text="Log in"
        type="submit"
        // disabledButtton={disabledButtton}
      ></Button>
    </form>
  );
};

export default LoginForm;
