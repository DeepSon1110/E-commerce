import orderService from "../services/orderService.js"


const createOrder = async (req,res)=>{
    try{
        console.log("req.user:", req.user); // Debug log
        
        const userId = req.user.id  // Changed from req.user.userId to req.user.id
        console.log("userId:", userId); // Debug log

        const order = req.body
        order.user = userId
        
        console.log("order before creation:", order); // Debug log

        const data = await orderService.createOrder(order)

        console.log(data)

        res.status(200).json({data,message:"order created successfully"})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error : error.message,message : "error to create order"})
    }
}

export {createOrder}