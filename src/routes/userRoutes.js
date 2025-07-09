
import express from 'express';
import { createUser } from '../controllers/userController.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';

const router =  express.Router()


router.get('/',isLoggedIn,(req,res)=>{
    const user = req.user
    console.log("i am decoding route")
    res.send('route page')
})


router.post('/createUser',createUser)




export default router;