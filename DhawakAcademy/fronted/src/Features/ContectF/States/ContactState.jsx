import { useForm } from "react-hook-form";

const ContactState = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log("Mukesh Thakur");
    console.log(data);

    reset();
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