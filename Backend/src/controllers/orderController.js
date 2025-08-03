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

const getOrderById = async(req,res)=>{
    try{
        const orderId = req.params.id;
        const data = await orderService.getOrderById(orderId);
        res.status(200).json({
            message: "Order fetched successfully",
            data
        });
    }catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message, message: "error to fetch order"});
    }
}

const updateOrderStatus = async(req,res)=>{
    try{
        const orderId = req.params.id
        const status = req.body.updateOrderStatus
        const data = await orderService.updateOrderStatus(orderId,status)
        res.status(200).json({
            message: "Order status updated successfully",
            data
        })
    }catch(error){
        console.log(error.message)
        res.status(400).json({error : error.message,message : "error to update order status"})
    }
}

const updatePaymentStatus = async(req,res)=>{
    try{
        const status = req.body.updatePaymentStatus
        const id = req.params.id
        const data = await orderService.updatePaymentStatus(id,status)
        res.status(200).json({
            message: "Payment status updated successfully",
            data
        })
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error: error.message, message: "error to update payment status"})
    }
}

export {createOrder,getOrderByUserId,getOrderById,updateOrderStatus,updatePaymentStatus}