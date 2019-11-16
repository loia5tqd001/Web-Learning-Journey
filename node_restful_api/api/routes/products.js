const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");

const Product = require('../models/products')

router.get('/', (req, res, next) => {
  Product.find().exec()
  .then(docs => {
    res.status(200).json({
      message: 'Get all products',
      products: docs
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
})

router.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  })

  product.save()
  .then(result => {
    console.log(result)
    res.status(201).json({
      message: 'Create a product',
      product
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    }) 
  })
})

router.get('/:productId', (req, res, next) => {
  const { productId } = req.params
  Product.findById(productId).exec()
  .then(doc => {
    res.status(200).json({
      message: 'Get a product with id',
      product: docs
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
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