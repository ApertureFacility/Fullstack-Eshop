const { Router } = require('express');
const router = Router();

router.post('/registration', (req, res) => {
  res.json({ message: 'Registration' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login' });
});

router.get('/auth', (req, res) => {
  res.json({ message: 'Auth check' });
});

module.exports = router;