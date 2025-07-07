import AuthService from "../services/AuthService.js";


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

export {register}
