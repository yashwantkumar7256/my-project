import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const CreateAllData = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [type, setType] = useState("topper");

  const renderInputs = () => {
    switch (type) {
      case "topper":
        return (
          <div className="bg-orange-700">
            selected student content
            <div>
              <input
                {...register("name")}
                type="text"
                placeholder="enter topper name"
              />
              <input
                {...register("post")}
                type="text"
                placeholder="enter topper name"
              />
              <input
                {...register("year")}
                type="text"
                placeholder="enter topper name"
              />
              <input
                {...register("image")}
                type="file"
                placeholder="choose file"
              />
            </div>
          </div>
        );
      case "course":
        return (
          <div>
            course content
            <div>
              <input
                {...register("courseName")}
                type="text"
                placeholder="enter course name"
              />
              <div>enter price</div>
              <input
                {...register("price")}
                type="text"
                placeholder="enter course price"
              />
               <div>enter duration</div>
              <input
                {...register("duration")}
                type="text"
                placeholder="enter course duration"
              />
               <div>enter validity</div>
              <input
                {...register("validity")}
                type="text"
                placeholder="enter course name"
              />
               <div>enter location</div>
              <input
                {...register("location")}
                type="text"
                placeholder="enter course name"
              />
               <div>enter timing</div>
              <input
                {...register("timing")}
                type="text"
                placeholder="enter course name"
              />
               <div>enter tranner name</div>
              <input
                {...register("tranner")}
                type="text"
                placeholder="enter course name"
              />
              <input
                {...register("image")}
                type="file"
                placeholder="choose img"
              />
            </div>
          </div>
        );
      case "memory":
        return (
          <div>
            memory content
            <div>
              <input
                {...register("memoryName")}
                type="text"
                placeholder="enter memory detail"
              />
               <input
                {...register("first")}
                type="text"
                placeholder="enter memory detail"
              />
               <input
                {...register("second")}
                type="text"
                placeholder="enter memory detail"
              />
               <input
                {...register("third")}
                type="text"
                placeholder="enter memory detail"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleChageInput = (e) => {
    setType(e.target.value);
  };

  const submitHandler = (data) => {
    console.log(data.image[0]);
    console.log("Form Data Submitted:", data);
    alert("success");
    toast.success("send successfully");
    reset();
  };

  return (
    <>
      <div className="bg-black pt-10 h-screen gap-3 text-white">
        <div className="bg-orange-300 px-20 text-green-700">CHALO</div>

        <form onSubmit={handleSubmit(submitHandler)}>
          <select
            value={type}
            onChange={handleChageInput}
            className="bg-blue-400 text-black"
          >
            <option value="topper">selected-student</option>
            <option value="course">course</option>
            <option value="memory">memory</option>
          </select>

          {renderInputs()}

          <button type="submit" className="bg-white text-black px-4 py-1 mt-2">
            submit
          </button>
        </form>

        <div className="bg-green-300 text-black">Footer content here</div>
      </div>
    </>
  );
};

export default CreateAllData;
