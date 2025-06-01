const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
  res.json({ message: 'Create type' });
});

router.get('/', (req, res) => {
  res.json({ message: 'Get type' });
});

router.delete('/', (req, res) => {
  res.json({ message: 'Delete type' });
});

module.exports = router;