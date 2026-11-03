import React, { useEffect, useState } from "react";
import StudentCart from "../components/StudentCart";
import axios from "axios"

const SecondPage = () => {
  const [studentData,setStudentData]= useState([])

  const getTopper= async ()=>{
    try{
      console.log("calling")
      const res= await axios.get('http://localhost:3000/api/topper')
       console.log(res.data.data)
       setStudentData(res.data.data)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
getTopper()
  },[])
  console.log(studentData)

  return (
    <div className="w-full bg-zinc-950 py-5 overflow-hidden">
      {/* Clean Header */}
      <div className="flex justify-center mb-2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-amber-500 tracking-wider uppercase border-b-2 border-amber-500 pb-2">
          Selected Students
        </h2>
      </div>

      {/* Responsive Horizontal Wavy Scroller  */}
      <div className="w-full overflow-x-auto scrollbar-none scrollbar-thumb-amber-600 scrollbar-track-zinc-900 px-6 py-12 flex items-center h-[55vh] md:h-[60vh] gap-6 snap-x snap-mandatory">
        
        {studentData.map((data, idx) => (
          <div 
            key={idx}
           
          >
            <StudentCart data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
