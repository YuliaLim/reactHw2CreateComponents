import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../schemes/loginFormSchema";
import Input from "../components/Input";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmitForm = (data) => {
    navigate("/menu");
    console.log(data);
  };

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="loginForm">
      <Input placeholder="Enter your login" control={control} name="login" />
      <Input
        placeholder="Enter your password"
        control={control}
        name="password"
      />
      <Button text="Log in" type="submit" disabledButtton={!isValid}></Button>
    </form>
  );
};

export default LoginForm;
