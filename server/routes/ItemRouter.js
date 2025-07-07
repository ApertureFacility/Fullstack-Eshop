const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const itemController = require('../controllers/ItemController');
const checkRole = require('../api/middleware/UserRoleMiddleware');
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

/**
 @route POST /api/item
@group Item - Управление товарами
@consumes multipart/form-data
@param {string} name.formData.required - Название товара
@param {number} price.formData.required - Цена товара
@param {number} brandId.formData.required - ID бренда
@param {number} typeId.formData.required - ID типа
@param {number} rating.formData - Рейтинг (по желанию)
@param {number} stock_quantity.formData - Кол-во на складе (по желанию)
@param {number} discount_price.formData - Цена со скидкой (по желанию)
@param {string} info.formData - JSON-информация (по желанию)
@param {file} img.formData.required - Изображение товара

 */
router.post('/', upload.single('img'), itemController.create);

/**
 * @route GET /api/item
 * @group Items - Управление товарами
 * @returns {object} 200 - Список товаров
 */
router.get('/', itemController.getAll);

/**
 * @route GET /api/item/{id}
 * @group Items - Управление товарами
 * @param {string} id.path.required - ID товара
 * @returns {object} 200 - Информация о товаре
 * @returns {object} 404 - Товар не найден
 */
router.get('/:id', itemController.getOne);

/**
 * @route PUT /api/item/{id}
 * @group Items - Управление товарами
 * @param {string} id.path.required - ID товара
 * @param {string} name.body - Название товара
 * @param {number} price.body - Цена товара
 * @returns {object} 200 - Товар успешно обновлён
 * @returns {object} 403 - Нет прав
 * @returns {object} 404 - Товар не найден
 */
router.put('/:id', itemController.update);

/**
 * @route DELETE /api/item/{id}
 * @group Items - Управление товарами
 * @param {string} id.path.required - ID товара
 * @returns {object} 200 - Товар успешно удалён
 * @returns {object} 403 - Нет прав
 * @returns {object} 404 - Товар не найден
 */
router.delete('/:id', itemController.delete);

module.exports = router;
