const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get orders',
    orders: []
  })
})

router.post('/:orders', (req, res, next) => {
  const { orders } = req.params
  res.status(201).json({
    message: 'Added orders ' + orders
  })
})

router.get('/:orderId', (req, res, next) => {
  const { orderId } = req.params
  res.status(200).json({
    message: 'Get order with id of ' + orderId,
    order: {
      id: orderId,
      info: 'An order'
    }
  })
})

router.delete('/:orderId', (req, res, next) => {
  const { orderId } = req.params
  res.status(200).json({
    message: 'Deleted order with id of ' + orderId
  })
})
