const { Router } = require('express');
const userController = require('../controllers/userController')
const AuthMiddleware=require('../api/middleware/AuthMiddleware')
const router = Router();

router.post('/registration', userController.registration);
router.post('/login',userController.login);

router.get('/auth',AuthMiddleware,userController.check);

module.exports = router;