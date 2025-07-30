import jwt from 'jsonwebtoken'
import { verifyToken } from '../helpers/token.js'

const isLoggedIn = (req,res,next) =>{

    try{
    
        // Check for token in cookies first, then in Authorization header
        let token = req.cookies.authToken;
        
        if (!token) {
            const authHeader = req.headers.authorization;
            if (authHeader && authHeader.startsWith('Bearer ')) {
                token = authHeader.substring(7); // Remove 'Bearer ' prefix
            }
        }

        if(!token){
            throw new Error ("User Not Authenticated")
        }

        const decoded = verifyToken(token)

        console.log("Decoded token:", decoded)

        req.user = decoded
        next();

    }catch(error){
        console.log("Auth error:", error.message)
        res.status(401).json({message: error.message})
    }
}

export {isLoggedIn}