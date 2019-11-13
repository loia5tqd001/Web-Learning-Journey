const express = require('express')
const app = express()
const morgan = require('morgan')

const productRoutes = require('./api/routes/products') 
const orderRoutes = require('./api/routes/orders')

app.use(morgan('dev')) // for logging
app.use(express.json()) // for body-parsing //https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

// Handle CORS error
app.use((req, res, next) => {
  res.header('Access-Controll-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') { // early-bird request by browser
    res.header(
      'Access-Controll-Allow-Methods',
      'PUT, POST, PATCH, DELETE, GET'
    )
    return res.status(200).json({})
  }
  next() // Forward request if it's not browser's early-bird
})

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

// Fallback handling (not found)
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// Handle error
app.use((error, req, res, next) => {
  res.status(error.status || 500) // 500 is database error
  res.json({
    error: {
      message: error.message
    }
  })
})


module.exports = app