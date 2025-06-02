require ('dotenv').config()
const express =require('express')
const path =require('path')
const port = process.env.PORT
const app=express()
const sequelize=require('./db')
const models=require('./models/models.js')
const cors=require('cors')
const { json } = require('sequelize')
const router=require('./routes/index.js')
const ErrorHandler=require('./api/middleware/HandlingMiddleware.js')

app.use(cors())
app.use(express.json())
app.use('/api',router)
app.use(ErrorHandler)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Ok' });
});

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port,()=>{console.log(`Server start at port ${port}`)})}
    catch(e){
        console.log(e)
    }
}

start()