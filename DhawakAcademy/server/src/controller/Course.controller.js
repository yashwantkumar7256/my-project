import courseModel from "../model/Course.model.js";

const createCourse=async(req,res)=>{

    try{

        const{imgUrl,price,duration,validity,location,timing,tranner}=req.body

    if(!imgUrl ||!price ||!duration ||!validity ||!location ||!timing ||!tranner){
    return res.status(400).json({
        message:"fill every field properly"
    })
    }
     const CouseData=await courseModel.create({
        imgUrl,
        price,duration,validity,location,timing,tranner
     })

     res.status(201).json(CouseData)

    }catch(err){
        console.log(err)
        return res.json(err.message)
     }

}


