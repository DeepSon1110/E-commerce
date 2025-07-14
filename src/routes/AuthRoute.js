// import express from 'express'
// import { register,login, forgotPassword } from '../controllers/AuthController.js'
// import { generateOtp } from '../utils/generateOtp.js'
// import { sendMail } from '../utils/sendMail.js'
// import Otp from '../models/Otp.js'

// const router = express.Router()

// router.post('/register',register)
// router.post('/login',login)
// router.post ('/forgotPassword',forgotPassword)
// // router.post('/forgotPassword',async(req,res)=>{
// //     try {
// //         const {email} = req.body;
// //         console.log("email",email);
// //         if(!email){
// //             throw new Error("Email is required")
// //         }
// //         const otpValue = generateOtp();

// //         const newOtp = await Otp.create({
// //             email: email,
// //             otp: otpValue

// //         })
// //         sendMail(email, otpValue)

// //         res.send(newOtp)
// //     }catch(error){
// //         console.log(error.message)
// //         res.send(error.message)
// //     }
// // })

// router.post("/verify-otp",async(req,res)=>{
//     try {
//         const {email,otp} = req.body;

//         const doesExist = await Otp.findOne({email})

//         if(!doesExist){
//             throw new Error("Otp does not exist")
//         }
//         if(doesExist.otp !== otp){
//             throw new Error("Invalid otp")
//         }
//         res.status(200).json({
//             message: "Otp is valid",
//             data : doesExist,
//         })

//     }catch(error){
//         console.log(error.message)
//         res.send(error.message)
//     }
// })

// export default router;

import express from "express";
import {
  register,
  login,
  forgotPassword,
  verifyOtp,
} from "../controllers/authController.js";
import User from "../models/User.js";

import bcrypt from 'bcrypt'


const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post("/register", register);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/verify-otp", verifyOtp);

router.post("/reset-password", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please fill all fields");
    }

    const doesUserExist = await User.findOne({ email });

    if (!doesUserExist) {
      throw new Error("User does not exist");
    }

    if(!doesUserExist.canChangePassword){
        throw new Error("User cannot change password");
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const data = await User.findOneAndUpdate({email},{password:hashedPassword,canChangePassword:false},{new:true})


    res.status(200).json({
      message: "Password is updated",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

export default router;
