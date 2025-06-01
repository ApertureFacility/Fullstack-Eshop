const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            if (!name) {
                return next(ApiError.badRequest('Not entred name'))
            }
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll()
            return res.json(brands)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            const brand = await Brand.findOne({where: {id}})
            if (!brand) {
                return next(ApiError.notFound('Brend not found'))
            }
            await brand.destroy()
            return res.json({message: 'DeleteSuccessful'})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
}

module.exports = new BrandController()