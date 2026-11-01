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

export const getAllTopper= async (req,res)=>{
       

    try{
      const response= await topperModel.find()
      
      if(response.length<=0){
       return res.status(200).json({
        message:"data fatched successfully",
        data:"data model is empty"
        
       })
        }

      return res.status(200).json({
        message:"data fetched successfully",
        
        data:response
      })

    }catch(err){
        console.log(err)

    }
}

export const deleteTopper= async(req,res)=>{

    try{
        const {id}=req.params

        const isData= await topperModel.findById(id)
        if(!isData){
            return res.status(404).json({
                message:"there is no data present to this id",
            })
        }

        const response= await topperModel.findByIdAndDelete(id)

        return res.status(200).json({
            message:"deata deleted successfully",
          data :response
        })

    }catch(err){
        console.log(err)
    }
}