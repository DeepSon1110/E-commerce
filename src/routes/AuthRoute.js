import express from 'express'
import { register,login, forgotPassword } from '../controllers/AuthController.js'
import { generateOtp } from '../utils/generateOtp.js'
import { sendMail } from '../utils/sendMail.js'
import Otp from '../models/Otp.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/forgotPassword',async(req,res)=>{
    try {
        const {email} = req.body;
        console.log("email",email);
        if(!email){
            throw new Error("Email is required")
        }
        const otpValue = generateOtp();

        const newOtp = await Otp.create({
            email: email,
            otp: otpValue

        })
        sendMail(email, otpValue)

        res.send(newOtp)
    }catch(error){
        console.log(error.message)
        res.send(error.message)
    }
})

router.post("/verify-otp",async(req,res)=>{
    try {
        const {email,otp} = req.body;

        const doesExist = await Otp.findOne({email})

        if(!doesExist){
            throw new Error("Otp does not exist")
        }
        if(doesExist.otp !== otp){
            throw new Error("Invalid otp")
        }
        res.status(200).json({
            message: "Otp is valid",
            data : doesExist,
        })

    }catch(error){
        console.log(error.message)
        res.send(error.message)
    }
})

export default router;