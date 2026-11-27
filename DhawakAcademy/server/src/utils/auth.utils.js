import jwt from "jsonwebtoken"
import config from "../config/config.js"

export const genrateToken= async({userId,role})=>{
    try{
 const accessToken= jwt.sign({id:userId,role},config.ACCESS_TOKEN,{expiresIn:'15m'});

    const refreshToken= jwt.sign({id:userId,role},config.REFRESH_TOKEN,{expiresIn:'7d'});
<<<<<<< HEAD
  
=======
   
>>>>>>> 96424ef9b40778be164483d4f416d0a04bb5542d
  return { accessToken,refreshToken}
    }catch(err){
        console.log(err)
    }
}

export const verifyAccessToken= (token)=>{
      const decode= jwt.verify(token,config.ACCESS_TOKEN)
return decode

    }


    export const verifyRefreshToken= (token)=>{
        const decode=jwt.verify(token,config.REFRESH_TOKEN)
<<<<<<< HEAD
    
=======
       
>>>>>>> 96424ef9b40778be164483d4f416d0a04bb5542d
    return decode
    }