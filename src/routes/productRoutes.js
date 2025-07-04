import express from 'express';
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../controllers/productController.js";

const router = express.Router();

//create product
router.post('/createProduct',createProduct)


//getallProducts
router.get('/getAllProduct',getAllProduct)

//getProductById
router.get('/getProductById/:id', getProductById)

//deleteProduct
router.delete('/deleteProduct/:id',deleteProduct)

//updateProduct
router.put('/updateProduct/:id',updateProduct)


export default router;