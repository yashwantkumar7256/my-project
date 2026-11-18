import React from "react";
import useContactState from "../States/ContactState.jsx";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    submitHandler,
    errors,
    loading,
  } = useContactState();

  const inputStyle = `
    w-full px-4 py-3 rounded-xl
    border border-slate-300
    outline-none transition-all duration-300
    focus:border-blue-500 focus:ring-2 focus:ring-blue-100
    placeholder:text-slate-400
  `;

  const labelStyle = "text-sm font-semibold text-slate-700";

  const errorStyle = "text-red-500 text-xs mt-1";

  return (
    <div className="min-h-screen text-black bg-slate-100 flex justify-center items-center p-4">

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-lg border border-slate-200">

        {/* Heading */}

        <div className="text-center mb-8">

          <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            Y
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Admission Enquiry
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Fill in your details and our team will contact you.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-5"
        >

          {/* Full Name */}

          <div className="flex flex-col gap-1">

            <label className={labelStyle}>
              Full Name
            </label>

            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum 15 characters allowed",
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Only alphabets are allowed",
                },
              })}
              type="text"
              placeholder="Enter your full name"
              className={inputStyle}
            />

            {errors.name && (
              <p className={errorStyle}>
                {errors.name.message}
              </p>
            )}

          </div>

          {/* Age */}

          <div className="flex flex-col gap-1">

            <label className={labelStyle}>
              Age
            </label>

            <input
              {...register("age", {
                required: "Age is required",
                pattern: {
                  value: /^[0-9]{2}$/,
                  message: "Age must be exactly 2 digits",
                },
              })}
              type="text"
              inputMode="numeric"
              maxLength={2}
              placeholder="Enter your age"
              className={inputStyle}
            />

            {errors.age && (
              <p className={errorStyle}>
                {errors.age.message}
              </p>
            )}

          </div>

          {/* Course */}

          <div className="flex flex-col gap-1">

            <label className={labelStyle}>
              Course Name
            </label>

            <input
              {...register("course", {
                required: "Course name is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters required",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters allowed",
                },
              })}
              type="text"
              placeholder="Enter course name"
              className={inputStyle}
            />

            {errors.course && (
              <p className={errorStyle}>
                {errors.course.message}
              </p>
            )}

          </div>

          {/* Mobile */}

          <div className="flex flex-col gap-1">

            <label className={labelStyle}>
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
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter your mobile number"
              className={inputStyle}
            />

            {errors.mob && (
              <p className={errorStyle}>
                {errors.mob.message}
              </p>
            )}

          </div>

          {/* Submit Button */}

          <button
            disabled={loading}
            type="submit"
            className="
              w-full mt-2
              bg-blue-600 hover:bg-blue-700
              disabled:bg-blue-400
              text-white font-semibold
              py-3 rounded-xl
              transition-all duration-300
              active:scale-[0.98]
              shadow-lg shadow-blue-600/20
            "
          >
            {loading ? "Submitting..." : "Submit Details"}
          </button>

        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Your information is safe and secure with us.
        </p>

      </div>

    </div>
  );
};

export default ContactForm;