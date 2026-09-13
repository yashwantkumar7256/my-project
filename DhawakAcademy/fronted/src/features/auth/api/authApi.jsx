import axiosIntance from "../../../config/api"

export const loginApi= async (data)=>{
    let resposnse=await axiosIntance.post("/api/auth/login",data);
    

    return resposnse.data

}


export const registerApi= async(data)=>{
console.log("register api called")
    let res= await axiosIntance.post("/api/auth/register",data);

    return res.data;
}
