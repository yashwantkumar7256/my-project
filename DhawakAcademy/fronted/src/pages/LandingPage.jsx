import React from "react";

const LandingPage = () => {
  return (
    <>
     
      <div className="w-full min-h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVAJpxpEzI-VMr0hcV5oaRkmOAgRjc952l9K8xTMdX4AAHv3hRrIvEC8&s=10')] bg-cover bg-center bg-no-repeat flex flex-col">  
         
        
        <div className="bg-black w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10">  
           
        
          <div  
            className="w-full bg-green-600 max-w-6xl h-auto md:h-[80vh] gap-4 p-4 rounded-xl
            grid grid-cols-1 md:grid-cols-[1fr_1.5fr] grid-rows-none md:grid-rows-[1fr_1fr]
            [grid-template-areas:'left-t''img''left-b'] 
            md:[grid-template-areas:'left-t_img''left-b_img']" 
          >  
            
           
            <div className="[grid-area:left-t] bg-amber-100 min-h-[150px] md:min-h-0 rounded-lg flex items-center justify-center font-bold text-xl md:text-2xl text-black p-4"> 
              1 
            </div>  
 
         
            <div className="[grid-area:img] bg-amber-400 min-h-[250px] md:min-h-0 rounded-lg flex items-center justify-center font-bold text-xl md:text-2xl text-black p-4"> 
              2 
            </div>  
 
         
            <div className="[grid-area:left-b] bg-amber-800 min-h-[150px] md:min-h-0 rounded-lg flex items-center justify-center font-bold text-xl md:text-2xl text-white p-4"> 
              3 
            </div>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
};  
 
export default LandingPage;
