const {Router} = require('express')
const brandController = require('../controllers/brandController')
const router = Router()
const checkRole = require('../api/middleware/UserRoleMiddleware');


router.post('/',checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)
router.get('/:id', brandController.getOne)
router.put('/:id',checkRole('ADMIN'), brandController.update) 
router.delete('/:id',checkRole('ADMIN'), brandController.delete)

module.exports = router