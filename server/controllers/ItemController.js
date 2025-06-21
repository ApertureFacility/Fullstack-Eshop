const {Item} = require('../models/models')
const ApiError = require('../api/apiError')
const uuid = require('uuid')
const path = require('path')

class ItemController {
    async create(req, res, next) {
        try {
            const {
                name,
                price,
                brandId,
                rating,
                typeId,
                stock_quantity,
                discount_price,
                info
            } = req.body;

            const file = req.file;

            if (!file) {
                return next(ApiError.badRequest('Файл не был загружен'));
            }

            const item = await Item.create({
                name,
                price,
                brandId,
                typeId,
                rating: rating || 0,
                img: file.filename,
                stock_quantity,
                discount_price,
                info: info ? JSON.parse(info.trim()) : null
            });

            return res.json(item);
        } catch (e) {
            console.error('Ошибка при создании товара:', e);
            return next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const items = await Item.findAll()
            return res.json(items)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const item = await Item.findOne({where: {id}})
            if (!item) {
                return next(ApiError.notFound('Item not found'))
            }
            return res.json(item)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params
            const {name, price, brandId, typeId} = req.body
            
            const item = await Item.findOne({where: {id}})
            if (!item) {
                return next(ApiError.notFound('Item not found'))
            }
            
            await item.update({name, price, brandId, typeId})
            return res.json(item)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            const item = await Item.findOne({where: {id}})
            if (!item) {
                return next(ApiError.notFound('Item not found'))
            }
            await item.destroy()
            return res.json({message: 'Item deleted successfully'})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ItemController()