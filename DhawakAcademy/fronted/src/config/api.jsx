import axios from "axios";
 const axiosIntance =axios.create({
    baseURL:"https://bihar-l952.onrender.com",
    headers:{
        "Content-Type":"application/json"
    },
})
export default axiosIntance;