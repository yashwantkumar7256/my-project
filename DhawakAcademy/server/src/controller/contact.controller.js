
import contactModel from "../model/contact.model.js";


export const createContact= async(req,res)=>{

    try{
    const {age,mob,name,course}=req.body
    
    const response= await contactModel.create({
        name,age,course,mob
    })


    return res.status(200).json({
        Message:"data submit successfully",
        data:response
    })
    }catch(err){
        console.log(err)
        return res.json(err)
    }
}


export const getAllContact= async (req,res)=>{

    try{
        const data= await contactModel.find()

        return res.status(200).json({
            Message:"data fetched successfully",
            data: data
        })

    }catch(err){
        console.log(err)
    }

}