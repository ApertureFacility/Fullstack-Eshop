const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const itemController = require('../controllers/ItemController');
const router = Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', 'static')); 
  },
  filename: (req, file, cb) => {
    cb(null, uuid.v4() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


router.post('/', upload.single('img'), itemController.create);
router.get('/', itemController.getAll);
router.get('/:id', itemController.getOne);
router.put('/:id', itemController.update);
router.delete('/:id', itemController.delete);

module.exports = router;