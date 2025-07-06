require ('dotenv').config()
const express =require('express')
const path =require('path')
const port = process.env.PORT
const app=express()
const sequelize=require('./db')
const cors=require('cors')
const { json } = require('sequelize')
const router=require('./routes/index.js')
const ErrorHandler=require('./api/middleware/HandlingMiddleware.js')

const expressSwagger = require('express-swagger-generator')(app); 

expressSwagger({
  swaggerDefinition: {
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'Документация API'
    },
    host: `localhost:${port}`,
    basePath: '/', 
    produces: ['application/json'],
    schemes: ['http']
  },
  basedir: __dirname,
  files: ['./routes/**/*.js'] 
});
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
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