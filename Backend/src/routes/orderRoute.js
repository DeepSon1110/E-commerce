import express from 'express'
import { createOrder, getOrderById, getOrderByUserId, updateOrderStatus, updatePaymentStatus } from '../controllers/orderController.js'
import { isLoggedIn } from '../middleware/isLoggedIn.js'

const router = express.Router()

router.post('/createOrder', isLoggedIn, createOrder)

// Get order by ID
router.get('/getOrderById/:id', isLoggedIn, getOrderById)

// Get all orders for logged-in user
router.get('/getOrderByUserId/:id', isLoggedIn, getOrderByUserId)

// Update order status
router.put('/updateOrderStatus/:id', isLoggedIn, updateOrderStatus)

// Update payment status
router.put('/updatePaymentStatus/:id', isLoggedIn, updatePaymentStatus)



export default router