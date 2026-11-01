import mongoose from "mongoose";
import { number } from "motion";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    age:{
        type:String,
        required:true,
    },
    mob:{
        type:String,
        minlength:10,
        maxlength:10,
        required:true
    },
    course:{
        type:String,
        required:true
    }

},{ timestamps: true })

const contactModel= mongoose.model("contact",contactSchema)

export default contactModel