import Order from "../models/Order.js";


//crete Order
const createOrder = async(order)=>{
    const result = await Order.create(order);
    return result;
};


export default {
    createOrder
}
