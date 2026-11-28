
import { decode } from "jsonwebtoken";
import userModel from "../model/user.model.js";
import { genrateToken, verifyAccessToken, verifyRefreshToken } from "../utils/auth.utils.js";
import bcrypt from "bcrypt"

const isDevelopment = process.env.NODE_ENV === "development";

const refreshCookieOptions = {
  httpOnly: true,
  secure: !isDevelopment,
  sameSite: isDevelopment ? "lax" : "none",
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000
};

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
      userId: user._id,role:user.role
    });
   

    user.refreshToken=  refreshToken
    await user.save()


    res.cookie("refreshToken", refreshToken, refreshCookieOptions);

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
    

   
    const {id,role}=req.user
    console.log(id)
    if(!id){
      return res.json("userId not found ")
    }
    
     const user=await userModel.findById(id)
     if(!user){
       return res.status(400).json({message:"user not founddddddd "})
     }
     return res.status(200).json({
          message:"user fetch successfully",

          data:{
            name:user.name,
            email:user.email,
           
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

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Email or password is invalid"
            });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(401).json({
                message: "Email or password is invalid"
            });
        }

        const { accessToken, refreshToken } =
            await genrateToken({
                userId: user._id,
                role: user.role
            });

       
        user.refreshToken = refreshToken;
        await user.save();

        
        res.cookie("refreshToken", refreshToken, refreshCookieOptions);

        return res.status(200).json({
            message: "Logged in successfully",
            data: {
                name: user.name,
                email: user.email,
                mob: user.mob
            },
            accessToken
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: "Login failed",
            error: err.message
        });
    }
};


export const refresh=async(req,res)=>{
    try{
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token cookie is missing",
            });
        }

        const decoded = verifyRefreshToken(refreshToken);

        const user = await userModel.findById(decoded.id);

        if (!user || refreshToken !== user.refreshToken) {
            return res.status(401).json({
                message: "Refresh token is invalid or expired",
            });
        }

        const { accessToken, refreshToken: newRefreshToken } = await genrateToken({
            userId: user._id,
            role: user.role,
        });

        user.refreshToken = newRefreshToken;
        await user.save();
        res.cookie("refreshToken", newRefreshToken, refreshCookieOptions);

        return res.status(200).json({
            message: "Token refreshed successfully",
            accessToken,
        });
    }catch(err){
        console.error("Refresh token error:", err);
        return res.status(401).json({
            message: "Refresh token is invalid or expired",
        })
    }
}