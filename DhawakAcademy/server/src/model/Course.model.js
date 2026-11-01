import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
courseName:{
  type:String,
  required:true,
}
  ,
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  validity: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required:true,
     minlength: 3,
    maxLength:50,
    default:"HARDI HIGH SCHOOL ,MUZ,BIHAR"
  },
   timing:{
    type:String,
    required:true,
    default:"6AM-9AM"
   },
   tranner:{
    type:String,
    required:true,
    default:"Manish kumar"
   }
},{ timestamps: true });

const courseModel = mongoose.model("course", courseSchema);

export default courseModel;
