const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get products',
    products: []
  })
})

router.post('/:products', (req, res, next) => {
  const { products } = req.params
  res.status(201).json({
    message: 'Added products ' + products
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
