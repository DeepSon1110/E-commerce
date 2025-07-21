import { configDotenv } from 'dotenv';
import express from 'express';
import connectDb from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
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

app.get('/',(req,res)=>{
    res.status(200).json({
        message : " get from app.js"
    })
})


app.use('/api/user',userRoutes )
app.use("/api/product",productRoutes)
app.use("/api/auth", AuthRoute);



const port = process.env.PORT
app.listen(port,()=>{
    console.log("port started at 4000: ",port)
})









