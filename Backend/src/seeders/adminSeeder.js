import User from "../models/User.js";
import { hashPassword } from "../utils/utility.js";
const adminSeeder = async () => {
  const adminFound = await User.findOne({ email: "admin@gmail.com" });
  if (!adminFound) {
    const password =hashPassword('admin')
    await User.create({
      userName: "admin",
      password,
      email: "admin@gmail.com",
      phone: 9812121212,
      role: "ADMIN",
    });

    console.log("admin created successfully");
  } else {
    console.log("admin already exists");
  }
};
export { adminSeeder };
