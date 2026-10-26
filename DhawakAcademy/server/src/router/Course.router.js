import express from "express"

const router=express.Router()

router.post("/create",(req,res)=>{
    return res.json("thankYou")
})

export default router