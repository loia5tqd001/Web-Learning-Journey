const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get orders',
    orders: []
  })
})

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  }
  res.status(201).json({
    message: 'Added order',
    order
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

module.exports = router;