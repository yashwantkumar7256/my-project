import React from 'react'; 
import { useForm } from 'react-hook-form';

const ContactForm = () => {
 
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  
  const submitHandler = (data) => {
    console.log("hello");
    console.log(data);
    alert(data.name);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        
        {/* Heading Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Admission Inquiry</h2>
          <p className="text-sm text-slate-500 mt-1">Apni details bharein aur hum aapse jaldi contact karenge.</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-5">
          
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-600">Full Name</label>
            <input 
              {...register("name")}
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 transition duration-200"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-600">Age</label>
            <input 
              {...register("age")}
              type="number" 
              placeholder="Enter your age" 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 transition duration-200"
            />
          </div>

          {/* Course Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-600">Course Name</label>
            <input 
              {...register("course")}
              type="text" 
              placeholder="Enter course name" 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 transition duration-200"
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-slate-600">Mobile Number</label>
            <input 
              {...register("mob")}
              type="tel" 
              placeholder="Enter your mobile number" 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 transition duration-200"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center"
          >
            Submit Details
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;
