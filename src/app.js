import { configDotenv } from 'dotenv';
import express from 'express';
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import AuthRoute from './routes/AuthRoute.js';

const app =  express();

configDotenv();

app.use(express.json());
app.use(express.urlencoded({extended : true}))

connectDb()

app.get('/',(req,res)=>{
    res.status(200).json({
        message : " get from app.js"
    })
})


app.use('/api',userRoutes )
app.use("/api/product",productRoutes)
app.use("/api/auth",AuthRoute)



const port = process.env.PORT
app.listen(port,()=>{
    console.log("port started at 4000: ",port)
})









