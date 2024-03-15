import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema } from "../schemes/userInfoSchema";
import Input from "../components/Input";

const UserInfoForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      userName: "",
      tel: "",
      address: "",
      priority: false,
    },
    resolver: zodResolver(userInfoSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="wpapperFormInfoUser">
      <form onSubmit={handleSubmit(onSubmit)} className="userInfoFrom">
        <Input placeholder="Enter name" control={control} name="userName" />
        <Input placeholder="Enter telephone" control={control} name="tel" />
        <Input placeholder="Enter address" control={control} name="address" />

        <div>
          <Input type="checkbox" control={control} name="priority" />
          <span>Want to yo give your order priority?</span>
        </div>
        <Button
          text="order now"
          type="submit"
          disabledButtton={!isValid}
        ></Button>
      </form>
    </div>
  );
};
export default UserInfoForm;
