import { mongo } from "mongoose";
import topperModel from "../model/topper.model.js";

import { uploadFile } from "../services/Storage.service.js";

export const createTopper=async(req,res)=>{

  
   
    try{
const{name,post,year}=req.body
console.log(name,post,year)
if(!name,!post,!year){
    return res.status(400).json({
        message:"fill every filed properly name,post, year",
        
    })
}
if(!req.file.buffer || !req.file.originalname){
    return res.status(400).json({
        message:"please choose photo"
    })
}



        const response= await uploadFile({
            buffer :req.file.buffer,
            fileName:req.file.originalname
        })
        console.log(response)
 

 const data= await  topperModel.create({
    imgUrl:response.url,
    name,
    post,
    year
 })

 return res.status(200).json({
    Message:"topper created successfully",
    data: data
 })
    }catch(err){
        console.log("createTopper Controller",err)
          if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ success: false, message: "Validation Error", errors: messages });
    }
    }
   
}