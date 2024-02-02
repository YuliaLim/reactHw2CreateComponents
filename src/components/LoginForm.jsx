import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  return (
    <form>
      <Input placeholder="Your full name"></Input>
      <Button text="Login"></Button>
    </form>
  );
};

export default LoginForm;
