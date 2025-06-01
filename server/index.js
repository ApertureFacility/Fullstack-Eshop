require ('dotenv').config()
const express =require('express')
const port = process.env.PORT
const app=express()
const sequelize=require('./db')
const models=require('./models/models.js')
const cors=require('cors')
const { json } = require('sequelize')
const router=require('./routes/index.js')


app.use(cors())
app.use(express.json())
app.use('/api',router)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Ok' });
});

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port,()=>{console.log(`hello ${port}`)})}
    catch(e){
        console.log(e)
    }
}

start()