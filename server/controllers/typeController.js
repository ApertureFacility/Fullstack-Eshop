const {Type} = require('../models/models')
const ApiError = require('../api/apiError')

class TypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            if (!name) {
                return next(ApiError.badRequest('No entered name of type'))
            }
            const type = await Type.create({name})
            return res.json(type)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }


    async getAll(req, res, next) {
        try {
            const types = await Type.findAll()
            return res.json(types)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }


    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const type = await Type.findOne({where: {id}})
            if (!type) {
                return next(ApiError.notFound('Type not found'))
            }
            return res.json(type)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }


    async update(req, res, next) {
        try {
            const {id} = req.params
            const {name} = req.body
            
            if (!name) {
                return next(ApiError.badRequest('Not entered name of type'))
            }
            
            const type = await Type.findOne({where: {id}})
            if (!type) {
                return next(ApiError.notFound('Type not found'))
            }
            
            await type.update({name})
            return res.json(type)
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }


    async delete(req, res, next) {
        try {
            const {id} = req.params
            const type = await Type.findOne({where: {id}})
            if (!type) {
                return next(ApiError.notFound('Type not found'))
            }
            
            await type.destroy()
            return res.json({message: 'Deleted successfuly'})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
}

module.exports = new TypeController()