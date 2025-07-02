import User from "../models/User.js"
const adminSeeder = async()=>{
          const adminFound = await User.findOne({email:"admin@gmail.com"})
        console.log(adminFound);
        if(!adminFound){  
            await User.create({
                userName:"admin",
                password: "admin",
                email:"admin@gmail.com",
                phone: 9812121212,
                role:"ADMIN"
            })

            console.log("admin created successfully")
        }
        else{
            console.log("admin already exists")
        }
}
export {adminSeeder}