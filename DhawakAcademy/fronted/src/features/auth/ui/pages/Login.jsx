import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const submitHandler = async (data) => {
    console.log("submit handler");
    try{
        let res= await axios.post("https://bihar-l952.onrender.com/api/auth/login",data)
        console.log(res)
    }catch(err){
  console.log(err)
    }
  };

  let {
    handleSubmit,
    reset,
    formState: { error },
    register,
  } = useForm();
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input {...register("email")} type="email" placeholder="enter your email" />
          <input {...register("password")}type="password" placeholder="password" />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
