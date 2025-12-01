import express from "express";
import {
  register,
  login,
  forgotPassword,
  verifyOtp,
} from "../controllers/AuthController.js";
import User from "../models/User.js";
import Otp from "../models/Otp.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post("/register", register);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/verify-otp", verifyOtp);

router.post("/reset-password", async (req, res) => {
  try {
    const { password } = req.body;
    const email = req.cookies.userEmail;

    if (!email || !password) {
      throw new Error("Please fill all fields");
    }

    const doesUserExist = await User.findOne({ email });

    if (!doesUserExist) {
      throw new Error("User does not exist");
    }

    if (
      !doesUserExist.otpExpiresAt ||
      doesUserExist.otpExpiresAt < new Date()
    ) {
      throw new Error("User cannot change password");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword, otpExpiresAt: null },
      { new: true }
    );

    res.clearCookie("userEmail");

    res.status(200).json({
      message: "Password is updated successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.get("/get-all-otps", async (req, res) => {
  try {
    const data = await Otp.find();
    res.json({ message: "Otps fetched successfully", data });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

export default router;
