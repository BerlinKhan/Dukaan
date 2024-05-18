import express from 'express'
const router = express.Router()
import { createProduct, deleteProduct, getProducts, getProductsByid, updateProduct } from '../controllers/productControllers.js';
import { admin, protect } from '../middleware/authMiddleware.js';


router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductsByid).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)




export default router