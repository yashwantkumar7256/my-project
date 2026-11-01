
import { verifyAccessToken } from "../utils/auth.utils.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(404).json({
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
    const {role}=req.user
    if(!role=="admin"){
      return res.status(401).json({
        message: "you are not authorized person"
      })
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