const { Router } = require('express');
const TypeController = require('../controllers/typeController'); 
const checkRole = require('../api/middleware/UserRoleMiddleware');


const router = Router();

/**
 * @route POST /api/type
 * @group Types - Типы инструмента
 * @param {object} type.body.required - Новый тип инструмента
 * @returns {object} 200 - Успешно созданный тип инструмента
 * @security JWT
 */
router.post('/', TypeController.create);

/**
 * @route GET /api/type
 * @group Types - Типы инструмента
 * @returns {object} 200 - Список всех типов инструмента
 */
router.get('/', TypeController.getAll);

/**
 * @route GET /api/type/{id}
 * @group Types - Типы инструмента
 * @param {number} id.path.required - ID типа инструмента
 * @returns {object} 200 - Найденный тип инструмента
 */
router.get('/:id', TypeController.getOne);

/**
 * @route PUT /api/type/{id}
 * @group Types - Типы инструмента
 * @param {number} id.path.required - ID типа инструмента
 * @param {object} type.body.required - Обновлённый тип инструмента
 * @returns {object} 200 - Успешно обновлённый тип инструмента
 * @security JWT
 */
router.put('/:id', TypeController.update);

/**
 * @route DELETE /api/type/{id}
 * @group Types - Типы инструмента
 * @param {number} id.path.required - ID типа инструмента
 * @returns {object} 200 - Успешно удалённый тип инструмента
 * @security JWT
 */
router.delete('/:id', TypeController.delete);


module.exports = router;