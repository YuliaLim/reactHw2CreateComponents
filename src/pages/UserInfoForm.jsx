import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema } from "../schemes/userInfoSchema";
import ErrorMesage from "../components/ErrorMessage";

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
        <input {...register("userName")} type="text" placeholder="enter name" />
        {errors.userName && (
          <ErrorMesage message={errors.userName.message}></ErrorMesage>
        )}
        <input {...register("tel")} type="text" placeholder="enter telephone" />
        {errors.tel && <ErrorMesage message={errors.tel.message}></ErrorMesage>}
        <input
          {...register("address")}
          type="text"
          placeholder="enter address"
        />
        {errors.address && (
          <ErrorMesage message={errors.address.message}></ErrorMesage>
        )}
        <div>
          <input {...register("priority")} type="checkbox"></input>
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
