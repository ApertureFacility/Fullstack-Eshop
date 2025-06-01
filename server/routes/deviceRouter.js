const { Router } = require('express');
const router = Router();

router.post('/registration', (req, res) => {
  res.json({ message: 'Device registration' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Device login' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get device with ID ${req.params.id}` });
});

module.exports = router;