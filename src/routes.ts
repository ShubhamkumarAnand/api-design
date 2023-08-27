import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from './modules/middleware'
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from './handlers/product'

const router = Router()

// Product Route
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.post(
  '/product',
  body('name').isString(),
  handleInputErrors,
  createProduct
)
router.put(
  '/product/:id',
  body('name').isString(),
  handleInputErrors,
  updateProduct
)
router.delete('/product/:id', deleteProduct)

// Update Route
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.post(
  '/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  () => {}
)

router.put(
  '/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED']),
  body('version').optional(),
  () => {}
)

router.delete('/update/:id', () => {})

// Update Point Route
router.get('/update-point', () => {})
router.get('/update-point/:id', () => {})
router.post('/update-point', () => {})
router.put(
  '/update-point/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {}
)

router.delete(
  '/update-point/:id',
  body('name').isString(),
  body('description').isString(),
  body('updateId').exists().isString(),
  () => {}
)

export default router
