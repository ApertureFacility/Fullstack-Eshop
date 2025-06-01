const {Router} = require('express')
const productController = require('../controllers/ProductController')
const router = Router()

router.post('/', productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)

module.exports = router