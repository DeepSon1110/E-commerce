import express from 'express';
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById
} from "../controllers/productController.js";
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { upload } from '../config/cloudinary.js';


const router = express.Router();

//create product
router.post('/createProduct', upload.single("imageUrl"), createProduct);

//get all products
router.get('/getAllProduct', getAllProducts);

//get product by id
router.get('/getProductById/:id', getProductById);

//delete product
router.delete('/deleteProduct/:id', isLoggedIn, isAdmin, deleteProductById);

//update product
router.put('/updateProduct/:id', isLoggedIn, isAdmin, updateProductById);

export default router;