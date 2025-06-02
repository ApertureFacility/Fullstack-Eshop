const {Router} = require('express')
const brandController = require('../controllers/brandController')
const router = Router()


router.post('/', brandController.create)
router.get('/', brandController.getAll)
router.get('/:id', brandController.getOne)
router.put('/:id', brandController.update) 
router.delete('/:id', brandController.delete)

module.exports = router