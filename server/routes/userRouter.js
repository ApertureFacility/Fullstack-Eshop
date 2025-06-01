const { Router } = require('express');
const userController = require('../controllers/userController')
const router = Router();

router.post('/registration', (req, res) => {
  res.json({ message: 'Registration' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login' });
});

router.get('/auth',userController.check);

module.exports = router;