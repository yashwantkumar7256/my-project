import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { toast } from "react-toastify";
import { registerApi } from "../../api/authApi";
const Register = () => {
  const [loding, setLoading] = useState(false);
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const submitHandler = async (data) => {
    setLoading(true);
      let res= await registerApi(data)
  

      console.log(res)
      toast.success(res)
      reset()

    setLoading(false);
    console.log(res);
  };
  
  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">

    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
      Create Account
    </h2>

    <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
      Please fill in your details
    </p>

    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>

        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>

        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>

        <input
          {...register("password")}
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mobile
        </label>

        <input
          {...register("mob")}
          type="tel"
          placeholder="Enter your mobile number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loding}
        className="w-full py-3 mt-2 bg-blue-600 text-white font-semibold 
                   rounded-lg hover:bg-blue-700 active:scale-[0.98] 
                   transition disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {loding ? "Submitting..." : "Submit"}
      </button>

    </form>
  </div>
</div>
  );
};

export default Register;
