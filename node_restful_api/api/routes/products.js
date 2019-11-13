const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get products',
    products: []
  })
})

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  }
  res.status(201).json({
    message: 'Added product',
    product
  })
})

router.get('/:productId', (req, res, next) => {
  const { productId } = req.params
  res.status(200).json({
    message: 'Get product with id of ' + productId,
    product: {
      id: productId,
      info: 'A product'
    }
  })
})

router.patch('/:productId', (req, res, next) => {
  const { productId } = req.params
  res.status(201).json({
    message: 'Updated product with id of ' + productId
  })
})

router.delete('/:productId', (req, res, next) => {
  const { productId } = req.params
  res.status(200).json({
    message: 'Deleted product with id of ' + productId
  })
})

module.exports = router;