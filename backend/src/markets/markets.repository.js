// module to define object to an id
import { ObjectId } from "mongodb";

// import get db to obtain mongodb
import { getDB } from "../config/mongodb.js";

// export MarketRepository class
export default class MarketRepository{
    
    // contructor to create market Collection
    constructor(){
        this.collection = "markets"
    }
    
    // function to create new market
    async createMarket(newMarket){
        console.log("FFFFFF", newMarket)
        try {
            const db = getDB()
            const collection = db.collection(this.collection)
            await collection.insertOne(newMarket)
            return newMarket
        } catch (error) {
            console.log("Error while appending data : ", error);
        }
    }
    
    // function to get all market
    async getAll(){
        try {
            const db = getDB()
            const collection = db.collection(this.collection)
            const markets = await collection.find().toArray()
            return markets
        } catch (error) {
            console.log("Error while fetching data : ", error);
        }
    }
    // function to delete Market
    async delete(id){
        try {
            const db = getDB()
            const collection = db.collection(this.collection)
            const market = await collection.deleteOne({_id: new ObjectId(id)})
        } catch (error) {
            console.log("Error while fetching data : ", error);
        }
    }
}