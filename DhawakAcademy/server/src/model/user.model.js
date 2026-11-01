import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    mob:{
        type:String,
        unique:true,
        requird:true,
        
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    },
    role:{
        type:String,
        default:'admin'
    }
})

const userModel= mongoose.model("user",userShema)

export default userModel