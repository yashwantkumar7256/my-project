import { useForm } from "react-hook-form";
import api from "../../../api";

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