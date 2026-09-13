import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

import { loginApi } from "../../api/authApi";


const Login = () => {
  const[loding,setLoding]=useState(false);
  const submitHandler = async (data) => {
    console.log("submit handler");
    setLoding(true)
    try{
      
    let res= await loginApi(data)

        console.log(res)
    }catch(err){
  console.log(err)
    }finally{
      setLoding(false)
      reset()
  }

  }

  let {
    handleSubmit,
    reset,
    formState: { error },
    register,
  } = useForm();
  return (
    <>
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Container: Toggles between full-width on mobile and a fixed max-width on laptop */}
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-sm border border-gray-100 sm:p-10">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form Group */}
        <form onSubmit={handleSubmit(submitHandler)} className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md">
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
               
                type="email"
                placeholder="name@company.com"
                className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-950 placeholder-gray-400 transition duration-150 ease-in-out focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 text-sm sm:text-base"
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
               
              </div>
              <input
                {...register("password", { required: true })}
               
                type="password"
                placeholder="••••••••"
                className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-950 placeholder-gray-400 transition duration-150 ease-in-out focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition duration-150 ease-in-out hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-[0.98]"
            >
             {loding?"LogIn...":"logIN"} 
            </button>
            <button>DONT'HAVE ACCOUNT: <NavLink to="/register">Register</NavLink></button>
          </div>
        </form>
        
      </div>
    </div>
    </>
  );
};

export default Login;
