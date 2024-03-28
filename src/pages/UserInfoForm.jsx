import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { userInfoSchema } from "../schemes/userInfoSchema";
import Input from "../components/Input";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserInfoForm = () => {
  const cartOrder = useSelector((state) => state.actionWithPizza);
  const navigate = useNavigate();
  const [error, setError] = useState("");
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
    let cart = [];
    cartOrder.items.map((item) => {
      cart.push({
        name: item.name,
        pizzaId: item.id,
        quantity: item.qty,
        totalPrice: item.unitPrice * item.qty,
        unitPrice: item.unitPrice,
      });
    });
    let dataOrder = {
      address: data.address,
      customer: data.userName,
      phone: data.tel,
      priority: data.priority,
      position: "",
      cart: cart,
    };
    const submitOrder = async () => {
      const response = await fetch(
        "https://react-fast-pizza-api.onrender.com/api/order",
        {
          method: "POST",
          body: JSON.stringify(dataOrder),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.status === "fail") {
        setError("Something went wrong");
      }
      if (result.status === "success") {
        const link = "/order/:"+result.data.id;
        navigate(link, {state:{key:result.data}});
        console.log(result);
      }
    };
    submitOrder();
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
