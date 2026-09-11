import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { toast } from "react-toastify";
const Register = () => {
  const [loding, setLoading] = useState(false);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {
    setLoading(true);
    console.log("clicked");
    let res = await axios.post(
      "https://bihar-l952.onrender.com/api/auth/register",
      data);
      console.log(res)
      toast.success("register successfully")

    setLoading(false);
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("name")}
          type="text"
          placeholder="enter your name"
        />
        <input
          {...register("email")}
          type="text"
          placeholder="enter your email"
        />
        <input
          {...register("password")}
          type="text"
          placeholder="enter password"
        />
        <input {...register("mob")} type="text" placeholder="enter your mob" />
        <button type="submit">{loding ? "submitting..." : "submit"}</button>
      </form>
    </div>
  );
};

export default Register;
