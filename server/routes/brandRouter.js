const { Router } = require('express');
const brandController = require('../controllers/brandController');
const checkRole = require('../api/middleware/UserRoleMiddleware');
const router = Router();

/**
 * @route POST /api/brand
 * @group Brands - Работа с брендами
 * @param {object} brand.body.required - Новый бренд
 * @returns {object} 200 - Успешное создание бренда
 * @security JWT
 */
router.post('/', checkRole('ADMIN'), brandController.create);

/**
 * @route GET /api/brand
 * @group Brands - Работа с брендами
 * @returns {object} 200 - Список всех брендов
 */
router.get('/', brandController.getAll);

/**
 * @route GET /api/brand/{id}
 * @group Brands - Работа с брендами
 * @param {number} id.path.required - ID бренда
 * @returns {object} 200 - Бренд с указанным ID
 */
router.get('/:id', brandController.getOne);

/**
 * @route PUT /api/brand/{id}
 * @group Brands - Работа с брендами
 * @param {number} id.path.required - ID бренда
 * @param {object} brand.body.required - Обновлённые данные бренда
 * @returns {object} 200 - Успешное обновление бренда
 * @security JWT
 */
router.put('/:id', brandController.update);

/**
 * @route DELETE /api/brand/{id}
 * @group Brands - Работа с брендами
 * @param {number} id.path.required - ID бренда
 * @returns {object} 200 - Успешное удаление бренда
 * @security JWT
 */
router.delete('/:id', brandController.delete);

module.exports = router;
