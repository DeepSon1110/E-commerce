import Product from "../models/Product.js";

//create product
const createProduct = async (data) => {
  return await Product.create(data);
};

//get all products
const getAllProduct = async () => {
  return await Product.find();
};

//get product by id
const getProductById = async (id) => {
  return await Product.findById(id);
};

//delete product by id
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

//update product
const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data,{new:true});
};

export default {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
  updateProduct,
};
