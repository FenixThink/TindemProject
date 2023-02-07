import City from '../models/City.model.js';




class cityController{
    static createCity = (req, res) => {
        try {
            const city = new City(req.body);
            city.Create();
            res.status(200).json({message: 'City successfully created'})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    };
}
export default cityController;