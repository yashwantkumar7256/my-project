import { useForm } from "react-hook-form";
import api from "../../../api";
import { toast } from "react-toastify";

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
const res= await api.post("/api/contact/create",data)
   console.log(res)
         toast.success(res.data.message || "SUBMIT SUCCESSFULLY");
   
reset();
}catch(err){
  toast.error(err.message)
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