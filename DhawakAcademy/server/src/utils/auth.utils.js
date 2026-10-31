import jwt from "jsonwebtoken"
import config from "../config/config.js"

export const genrateToken= async({userId,role})=>{
    try{
 const accessToken= jwt.sign({id:userId,role},config.ACCESS_TOKEN,{expiresIn:'15m'});

    const refreshToken= jwt.sign({id:userId,role},config.REFRESH_TOKEN,{expiresIn:'7d'});
    console.log("access",accessToken)
    console.log("refesh",refreshToken)
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
        console.log(decode)
    return decode
    }