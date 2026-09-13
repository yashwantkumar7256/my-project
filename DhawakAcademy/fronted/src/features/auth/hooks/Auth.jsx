import axios from "axios"

export const useLogin=(data)=> {
    console.log('login clicked')
    let res=axios.post("",data)
    console.log(res)
    
} 
