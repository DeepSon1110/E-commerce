import authService from "../services/AuthService.js";
import { createToken } from "../helpers/token.js";

const register = async (req, res) => {
  try {
    const { email, phone, userName, password, confirmPassword } = req.body;

    if (!password || !email || !phone || !confirmPassword || !userName) {
      return res.status(400).json({ message: "User credential is missing." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password and confirm password does not match.",
      });
    }

    const data = await authService.register({
      email: email,
      phone: phone,
      userName: userName,
      password: password,
    });

    res.status(201).json({
      message: "User registered successful",
      data,
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Internal server error" });
  }
};

// Example login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "User credential is missing" });
  }

  try {
    const data = await authService.login({ email, password });

    const payload = {
      id: data._id,
      userName: data.userName,
      role: data.role,
      phone: data.phone,
      email: data.email,
    };

    //Webtoken generation
    // const token = jwt.sign(payload, "secretkey")
    const token = createToken(payload);
    res.cookie("authToken", token);

    res.status(200).json({
      message: "Login successful",
      data,
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

// const forgotPassword = async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log("email", email);
//     if (!email) {
//       throw new Error("Email is required");
//     }

//     const data = await authService.forgotPassword({ email });

//     res.status(200).json({ message: "Successfully sent Email", data });
//   } catch (error) {
//     console.log(error.message);
//     console.log("first");
//     res.status(400).json({
//       message: error.message,
//     });
//   }
// };

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    res.cookie("userEmail",email)
    if (!email) {
      throw new Error("Email is required");
    }

    const data = await authService.forgotPassword({email})
    res.send(data);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

const verifyOtp = async (req, res) => {
  try {
    const {otp } = req.body;

    const email = req.cookies.userEmail;

    const data = await authService.verifyOtp({ email, otp });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

export { register, login, forgotPassword, verifyOtp };
