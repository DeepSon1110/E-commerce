import { configDotenv } from 'dotenv';
import express from 'express';
import connectDb from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import orderRoute from './src/routes/orderRoute.js';
import AuthRoute from './src/routes/AuthRoute.js';
import cookieParser from 'cookie-parser';
import cors from "cors";


const app =  express();

configDotenv();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

connectDb()

app.get("/test",(req,res)=>{
    res.cookie("name","name",{
        httpOnly: true,
        maxAge: 1000*60*10
    })
    res.status(200).send("<b><a style = 'color: white; background : black ; padding : 2px'>Hello</a>,Welcome to my app !</b>")
})

app.get('/',(req,res)=>{
    res.status(200).json({
        message : " get from app.js"
    })
})

app.get("api/clear-cookie",(req,res)=>{
    res.clearCookie("name",{
        httpOnly: true,
        maxAge: 1000*60*10
    })
    res.status(200).send("cookie cleared")
})

app.use('/api/user',userRoutes )
app.use("/api/product",productRoutes)
app.use("/api/auth", AuthRoute);
app.use("/api/order",orderRoute)



const port = process.env.PORT
app.listen(port,()=>{
    console.log("port started at 4000: ",port)
})









