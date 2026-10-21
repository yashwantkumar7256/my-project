import React from "react";
import useContactState from "../States/ContactState.jsx";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    submitHandler,
    errors,
  } = useContactState();

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            contact for addmission
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            
          </p>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-5"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-600">
              Full Name
            </label>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300"
            />

            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-600">
              Age
            </label>

            <input
              {...register("age", {
                required: "Age is required",
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Enter your age"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300"
            />

            {errors.age && (
              <p className="text-red-500 text-sm">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* Course */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-600">
              Course Name
            </label>

            <input
              {...register("course", {
                required: "Course name is required",
              })}
              type="text"
              placeholder="Enter course name"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300"
            />

            {errors.course && (
              <p className="text-red-500 text-sm">
                {errors.course.message}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-600">
              Mobile Number
            </label>

            <input
              {...register("mob", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300"
            />

            {errors.mob && (
              <p className="text-red-500 text-sm">
                {errors.mob.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
          >
            Submit Details
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;