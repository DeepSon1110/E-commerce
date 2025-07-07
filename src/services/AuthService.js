import bcrypt from 'bcrypt'
import User from '../models/User.js'

const register = async (data) =>{
    const hashedPassword = bcrypt.hashSync(data.password,10)

    const email = data.email

    const userExist = await User.findOne({email})

    if(userExist){
        throw new Error('Email already exist')
    }
    return await User.create({
        email : email,
        password : hashedPassword,
        userName : data.userName,
        phone : data.phone
    })

    
}

export default {register}

