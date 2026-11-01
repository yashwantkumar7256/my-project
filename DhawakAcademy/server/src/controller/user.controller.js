
import userModel from "../model/user.model.js";
import { genrateToken, verifyAccessToken, verifyRefreshToken } from "../utils/auth.utils.js";
import bcrypt from "bcrypt"
import cookie from "cookie-parser";

export const registerUser = async (req, res) => {
  try {
    const { name, password, email, mob } = req.body;

    const user= await userModel.create({
      name,
      email,
      password: await bcrypt.hash(password,12),
      mob,
      
    });
    const { accessToken, refreshToken } = await genrateToken({
      userId: user._id,
    });
    console.log("access",accessToken)

    user.refreshToken=  refreshToken
    await user.save()


    res.cookie("refreshToken",refreshToken,{
        httpOnly:true
    })

    return res.status(201).json({
      message: "user created successfully",
      data:{
        name:user.name,
        email:user.email,
        mob:user.mob,
        age:user.age
      },
     accessToken
    });
  } catch (err) {
    console.log(err);
  }
};


export const getMe= async (req,res)=>{
    try{
     const token=req.headers.authorization
     if(!token){
        return req.status(400).json({
            message:"token is required"
        })
     }

     const accessToken= await token?.split(" ")[ 1 ];
      if(!accessToken){
        return res.status(400).json({
            message:"unauthorized or not found accessToken"
        })

      }

      const decode= verifyAccessToken(accessToken)
     const user=await userModel.findById(decode.id)
     if(!user){
       return res.status(400).json({message:"user not found "})
     }
     return res.status(200).json({
          message:"user fetch successfully",

          data:{
            name:user.name,
            email:user.email,
            age:user.age,
            mob:user.mob
          }
     })

     
     
    }catch(err){
        console.log(err)
        return res.status(400).json({
            message:"unAuthorized or invalid token"
        })
    }
}

export const login= async (req,res)=>{

try{

  const {email,password}=req.body

  const user= await userModel.findOne({email})
  if(!user){
     return res.status(401).json({
      message:"email or password is invalid "
    })
  }
  const isValid= await bcrypt.compare(password,user.password)
  console.log(isValid)
  if(!isValid){
    return res.status(401).json({
      message:"email or password is invalid "
    })
  }
  const {accessToken,refreshToken}= await genrateToken({userId:user._id,role:user.role})

     res.cookie("refreshToken",refreshToken,{
      httpOnly:true
     })
     user.refreshToken=refreshToken
     await user.save()


  return res.status(200).json({
    message:"logedIn successfully",
    data:{
      name:user.name,
      email:user.email,
      mob:user.mob
    },
    accessToken
  })

}catch(err){
  console.log(err)
  return res.status(400).json({
    message:err.message
  })
}

}


export const refresh=async(req,res)=>{

    
    
    try{
    const refreshToken=req.cookies.refreshToken
        console.log("1st",refreshToken)
        
    if(!refreshToken){
        return res.status(400).json({
            message:"invalid refreshToken"
        })
    }
     const decode=verifyRefreshToken(refreshToken)
            console.log("decode",decode)
     const user= await userModel.findById(decode.id)

     if(refreshToken != user.refreshToken){

        user.refreshToken=null
        await user.save()
        return res.status(401).json({
            message:"unAuthozied or invalid refreshToken ",
            
        })
     }

     const { accessToken,refreshToken:newRefreshToken}=await genrateToken({userId:user._id})
     console.log("access",accessToken,"refesh",newRefreshToken)

    res.cookie("refreshToken",newRefreshToken,{httpOnly:true})

    user.refreshToken=newRefreshToken
    await user.save()

    return res.status(200).json({
        message:"token refreshed successfully",
        accessToken
    })

    }catch(err){
        console.log("refresh err ",err)
        return res.status(401).json({
            message:"unAuthozied or invald refresh token "
        })
    }

}