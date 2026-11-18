import app from "./app/app.js";
import connectDB from "./config/db.js";


await connectDB() 
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`running ${port}`)
})