import axios from "axios";
import { useForm } from "react-hook-form";

const ContactState = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler =async (data) => {
  
    

try{
  console.log(data);
const res= await axios.post("https://my-project-1-m8fm.onrender.com/contact/create",data) 
   console.log(res)
reset();
}catch(err){
  console.log(err)
}
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    submitHandler,
  };
};

export default ContactState;