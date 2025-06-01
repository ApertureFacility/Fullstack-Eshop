const { Router } = require('express');
const TypeController = require('../controllers/typeController'); 

const router = Router();


router.post('/', TypeController.create);       
router.get('/', TypeController.getAll);       
router.get('/:id', TypeController.getOne);    
router.put('/:id', TypeController.update);    
router.delete('/:id', TypeController.delete);  

module.exports = router;