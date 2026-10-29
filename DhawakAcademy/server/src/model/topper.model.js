import mongoose from "mongoose";


const topperSchema= new mongoose.Schema({

    imgUrl:{
        type:String,
       required:true,
    },
    name:{
        type:String,
        minlength:3,
        maxlegth:15,
        required:true,
    },
        post:{
            type:String,
           required:true
        },
        year:{
            type:String,
            required:true
            
        }


})

const topperModel= mongoose.model("Topper",topperSchema)

export default topperModel