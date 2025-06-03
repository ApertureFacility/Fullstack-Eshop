const { Router } = require('express');
const TypeController = require('../controllers/typeController'); 
const checkRole = require('../api/middleware/UserRoleMiddleware');


const router = Router();


router.post('/',checkRole('ADMIN'), TypeController.create);       
router.get('/', TypeController.getAll);       
router.get('/:id', TypeController.getOne);    
router.put('/:id',checkRole('ADMIN'), TypeController.update);    
router.delete('/:id',checkRole('ADMIN'), TypeController.delete);  

module.exports = router;