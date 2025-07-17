import express from 'express';
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../controllers/productController.js";
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { isAdmin } from '../middleware/isAdmin.js';

const router = express.Router();

//create product
router.post('/createProduct',isLoggedIn,isAdmin,createProduct)


//getallProducts
router.get('/getAllProduct',getAllProduct)

//getProductById
router.get('/getProductById/:id', getProductById)

//deleteProduct
router.delete('/deleteProduct/:id',isLoggedIn,isAdmin,deleteProduct)

//updateProduct
router.put('/updateProduct/:id',isLoggedIn,isAdmin,updateProduct)


export default router;