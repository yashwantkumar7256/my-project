import { useForm } from "react-hook-form"

 
 
 const  useFormData=()=>{
     
    let {register,reset,formState:{errors},handleSubmit}=useForm();
}

export default{
    register,reset,errors,handleSubmit,useFormData
}