import Order from "../models/Order.js";

//crete Order
const createOrder = async (order) => {
  const result = await Order.create(order);
  return result;
};

//get Order

const getOrderById = (id) => {
  return Order.findById(id);
};

const getOrderByUserId = (userId) => {
  return Order.find({ user: userId });
};

const updateOrderStatus = async (id, status) => {
  await Order.findByIAndUpdate(
    id,
    {
      orderStatus: status,
    },
    { new: true }
  );
};

const updatePaymentStatus = async (id, status) => {
  await Order.findByIAndUpdate(
    id,
    {
      paymentStatus: status,
    },
    { new: true }
  );
};

export default {
  createOrder,
  getOrderById,
  getOrderByUserId,
  updatePaymentStatus,
  updateOrderStatus,
};
