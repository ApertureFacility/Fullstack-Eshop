const Router = require('express')
const router = new Router()


const userRouter=require('./userRouter')
const brandRouter=require('./brandRouter')
const ItemRouter=require('./ItemRouter')
const typeRouter=require('./typeRouter')

router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/Item',ItemRouter)


module.exports=router