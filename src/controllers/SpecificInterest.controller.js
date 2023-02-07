import SpecificInterest from '../models/SpecificInterest.model.js'

class SpecificInterestController{
    static createSpecificInterest = async (req, res) => {
        try {
            const specificInterest = new SpecificInterest(req.body);
            const data = await specificInterest.create();
            res.status(200).json({message: 'Specific interest successfully created'})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    };
}

export default SpecificInterestController;