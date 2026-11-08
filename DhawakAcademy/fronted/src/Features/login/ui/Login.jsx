import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { setAccessToken } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (data) => {
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
        { withCredentials: true }
      );

      setAccessToken(res.data.accessToken);
     console.log(res)
      reset();
    } catch (err) {
      console.log("Login Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10">

      {/* Background Design */}
      <div className="absolute w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-9 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-600 rounded-2xl text-white text-2xl font-bold shadow-lg shadow-blue-600/30">
            Y
          </div>

          <h1 className="text-3xl font-bold text-white mt-5">
            Welcome Back!
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Login to access your account
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">

          {/* Email */}
          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-400 text-xs mt-2">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 pr-16 text-white outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 text-sm hover:text-blue-300"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            {errors.password && (
              <p className="text-red-400 text-xs mt-2">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>

        </form>

        {/* Footer */}
        <div className="mt-7 text-center">

          <p className="text-gray-500 text-xs">
            Secure Login • Your data is protected
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;