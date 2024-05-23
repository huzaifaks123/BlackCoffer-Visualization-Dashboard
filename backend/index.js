// import environment variable
import 'dotenv/config'

// import express from express-module
import express from 'express'

// import bodyParser from module
import bodyParser from 'body-parser'

// import market router to route market api
import marketRouter from './src/markets/markets.routes.js'

// import mongoConnection from its directory
import { connectToMongoDB } from './src/config/mongodb.js'

// define express server
const app = express()

// deifne port for server
const port = process.env.PORT

// use bodyParser middleware
app.use(bodyParser.json())

// use route for market api
app.use('/api/markets', marketRouter)

// run server on defined port
app.listen(port,(err)=>{
    console.log("Server is running successfully on port :", port)
    if(err){
        console.log("Error while running server :", err);
    }
    connectToMongoDB()
})