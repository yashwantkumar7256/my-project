import { response } from "express";
import courseModel from "../model/Course.model.js";
import { uploadFile } from "../services/Storage.service.js";
 export const createCourse=async(req,res)=>{
    console.log(req.body)
    console.log(req.file)

    try{

      // upload image

      const imageResponse = await uploadFile({
  buffer: req.file.buffer,
  fileName: req.file.originalname,
});

console.log("Image URL:", imageResponse.url);

     
       const{price,duration,validity,location,timing,tranner}=req.body

    if(!price ||!duration ||!validity ||!location ||!timing ||!tranner){
    return res.status(400).json({
        message:"fill every field properly"
    })
    }
     const CouseData=await courseModel.create({
        
        price,duration,validity,location,timing,tranner,
        imgUrl:imageResponse.url
     })

     res.status(201).json({
        message:"course created succussfully",
        CouseData
     })

    }catch(err){
        console.log(err)
        return res.json(err.message)
     }

}




export const getAllCourse=async (req,res)=>{
   try{
      const response =await courseModel.find()
      return res.status(200).json({
         message:"data fetch successfully",
         data:response
      })

   }catch(err){
   console.log(err)
   }
}

export const deleteData=async(req,res)=>{
        try{
       const {id}=req.params
       console.log(id)
       if(!id){
         return res.status(400).json({
            message:"id is required"
         })
       }
      const data=await courseModel.findById(id)

      if(!data){
         return res.status(404).json({
            message:"data not found"
         })
      }
      
      const response= await courseModel.findByIdAndDelete(id)
      console.log(response)
        if(response){
         return res.status(201).json({
            message:"data deleted successfully",
            response
         })
        }
      
       
        }catch(err){
        console.log(err)
        }
}