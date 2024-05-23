// import express from express-module
import express from 'express'

// import marketController and create instance
import MarketController from './markets.controller.js'
const marketController = new MarketController()

// create router using express router
const marketRouter = express.Router()

// define api routes
marketRouter.post("/create", marketController.create)
marketRouter.get("/", marketController.getAll)
marketRouter.delete("/:id", marketController.deleteMarket)

// export router 
export default marketRouter