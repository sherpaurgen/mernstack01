import express from 'express'
import dotenv from 'dotenv'
const app = express()
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js';

const PORT = process.env.PORT || 44022
app.listen(PORT, console.log('express server running port 44022'))

//Define routes
dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.send('API is up')
})

app.use('/api/products', productRoutes)
