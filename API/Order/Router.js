const express = require('express')
const router = express.Router()

const { createOrder, getOrders, getOrderByEmail, getOrderByID, updateOrder, deleteOrder } = require('./Controller')

router.post('/createOrder', createOrder)
router.get('/getOrders', getOrders)
router.get('/getorder-byemail', getOrderByEmail)
router.get('/getorder-byId', getOrderByID)
router.put('/update-order', updateOrder)
router.delete('/delete-order', deleteOrder)
// router.put('/updateOrder', updateOrder)


module.exports = router