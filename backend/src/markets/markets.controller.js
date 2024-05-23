// import market model from its directory
import MarketModel from "./markets.model.js";

// import Market Repository from its directory
import MarketRepository from "./markets.repository.js";

// export controller class
export default class MarketController {

    // contructor to create instance of repository class
    constructor() {
        this.marketRepository = new MarketRepository()
    }

    
    // function to create new market
    create = async (req, res) => {
        console.log("Creating")
        try {
            const {
                end_year,
                intensity,
                sector,
                topic,
                insight,
                url,
                region,
                start_year,
                impact,
                added,
                published,
                country,
                relevance,
                pestle,
                source,
                title,
                likelihood,
             } = req.body
            const newMarket = new MarketModel(
                end_year,
                intensity,
                sector,
                topic,
                insight,
                url,
                region,
                start_year,
                impact,
                added,
                published,
                country,
                relevance,
                pestle,
                source,
                title,
                likelihood,
            )
            console.log("newMarket",newMarket)
            const marketCreated = await this.marketRepository.createMarket(newMarket)
            if (marketCreated) {
                return res.status(201).json({
                    data: marketCreated
                    }
                )
            } else {
                return res.status(400).send("Error while creating market")
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    
    // function to get all market
    getAll = async (req, res) => {
        try {
            const markets = await this.marketRepository.getAll()
            if (markets) {
                return res.status(200).json(markets)
            } else {
                return res.status(400).send("markets not available")
            }
        } catch (error) {
            return res.status(400).send("Error while collecting market")
        }
    }

    // function to delete Market
    deleteMarket = async (req, res) => {
        try {
            await this.marketRepository.delete(req.params.id)
            return res.status(200).send({
                data: {
                    message: "market deleted"
                }
            })
        } catch (error) {
            return res.status(400).send("Error while deleting market")
        }
    }
}