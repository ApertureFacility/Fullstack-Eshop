const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
  res.json({ message: 'Create brand' });
});

router.get('/', (req, res) => {
  res.json({ message: 'Get brands' });
});

router.delete('/', (req, res) => {
  res.json({ message: 'Delete brand' });
});

module.exports = router;