import express from 'express';
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productController';
import { protect, admin, seller } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').get(getProducts).post(protect, seller, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, seller, deleteProduct)
  .put(protect, seller, updateProduct);

export default router;