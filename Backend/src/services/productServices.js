import Product from "../models/Product.js";

//create product
const createProduct = async (data) => {
  return await Product.create(data);
};

//get all products
const getAllProduct = async (query={}) => {

  const filter = {}
  if (query.brand) {filter.brand = {$in: query.brand.split(',')}}
  if (query.use) {filter.use = {$in: query.use.split(',')}}


  if (query.ram) {filter.ram = {$in: query.ram.split(',').map(n=>parseInt(n))}}
  if (query.rom) {filter.rom = {$in: query.rom.split(',').map(r=>parseInt(r))}}
  if (query.gen) {filter.gen = {$in: query.gen.split(',').map(g=>parseInt(g))}}
  if (query.productName) {filter.productName = {$regex:query.productName, $options : "i" }} 
  

  console.log(filter)


  return await Product.find(filter).sort({price:1});
  
};

//get product by id
const getProductById = async (id) => {
  return await Product.findById(id);
};

//delete product by id
const deleteProduct = async (id) => {
  const product = await Product.findOne({_id:id})
  const imageName = product.imageName
  await cloudinary.uploader.destroy(imageName)
  return await Product.deleteOne({_id:id});
};

//update product
const updateProduct = async (id, data) => {
  const product = await Product.findById(id)
  const oldImageName = product.imageName
  await cloudinary.uploader.destroy(oldImageName)
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export default {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
  updateProduct,
};
