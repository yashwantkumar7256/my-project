
import userModel from "../model/user.model.js";
import { verifyAccessToken } from "../utils/auth.utils.js";

export const authenticateUser = async (req, res, next) => {
  console.log("cookie",req.cookies)
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "token invalid or not found",
      });
    }
    const accessToken =  token.split?.(" ")[1];

    if (!accessToken) {
      return res.status(401).json({
        message: "invalid or notfound accessToken",
      });
    }

    const decode = verifyAccessToken(accessToken);
    if (!decode) {
      return res.status(401).json({
        message: "invalid or notFound accessToken",
      });
    }

    console.log("completed");
    console.log(decode);

      req.user = decode;
          next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message:"unAuthorized or invalid token"
    })
  }
};

export const authenticateAdmin=async (req,res,next)=>{

  try{
     // const user=
    const {id}=req.user
    const user= await userModel.findById(id)
    console.log(user.role,"id")
   if (user.role !== "admin") {
      return res.status(403).json({
        message: "mar moj",
      });
    }
    next()
  }catch(err){
console.log(err)
return res.status(401).json({
  message:"you are not authorized",
  error:err
})
  }
}