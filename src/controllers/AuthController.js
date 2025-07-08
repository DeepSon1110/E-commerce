import AuthService from "../services/AuthService.js";
import jwt from 'jsonwebtoken';


const register = async (req, res) => {
  try {
    // console.log("Request Body:", req.body);
    const { userName, email, password, confirmPassword, phone } = req.body;

    if (!password || !email || !phone || !confirmPassword || !userName) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }

    if (password !== confirmPassword) {
      return res.status(400).send("password did not match");
    }
    const data = await AuthService.register({
      email,
      phone,
      password,
      userName,
    });

    res.status(200).json({
      message: "User created successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const login = async(req,res) =>{
try{
    //login function
  const {email,password} = req.body

  if(!email || !password){
    throw new Error("User Crediential missing")
  }

  const data = await AuthService.login({email,password})

  const payload = {
    id : data._id,
    userName : data.userName,
    role : data.role,
    email : data.email
  }

  const token = jwt.sign(payload,"secretKey")
  res.cookie('authToken',token)

  res.status(200).json({
    message : "Login Successful",
    data,
    token
  })
}
catch(error){
  console.log(error.message)
    res.status(400).send(error.message)
  
}
}

export {register,login}
