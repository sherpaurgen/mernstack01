import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js';

const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.json(products)

}))

router.get('/:id', asyncHandler(async (req, res) => {
    console.log(req)
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Item not found' })
    }
}))

export default router