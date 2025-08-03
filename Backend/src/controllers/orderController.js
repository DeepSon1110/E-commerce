import orderService from "../services/orderService.js"


const createOrder = async (req,res)=>{
    try{
        console.log("req.user:", req.user); 
        
        const userId = req.user.id  
        console.log("userId:", userId); 

        const order = req.body
        order.user = userId
        
        console.log("order before creation:", order); 

        const data = await orderService.createOrder(order)

        console.log(data)

        res.status(200).json({data,message:"order created successfully"})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error : error.message,message : "error to create order"})
    }
}

const getOrderByUserId = async(req,res)=>{
    try{
        const userId = req.user.id
        const data = await orderService.getOrderByUserId(userId)
        res.status(200).json({
            message : "User order fetched successfully",
            data
        })
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error : error.message,message : "error to fetch user order"})
    }
}

export {createOrder}