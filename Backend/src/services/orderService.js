import Order from "../models/Order.js";


//crete Order
const createOrder = async(order)=>{
    const result = await Order.create(order);
    return result;
};


//get Order
const getOrder = async(id)=>{
    const result = await Order.findById(id).populate("product")
    return result;
    
}

export default {
    createOrder
}
