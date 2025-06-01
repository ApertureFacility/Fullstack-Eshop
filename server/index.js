require ('dotenv').config()
const express =require('express')
const port = process.env.PORT
const app=express()
const sequelize=require('./db')

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