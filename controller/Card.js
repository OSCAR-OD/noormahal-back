const Card = require('../models/card.js');
const createCard = async (req, res, next) => {
    const { heading, subheading, desc, pic} = req.body

     if (!heading || !subheading|| !desc|| ! pic) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    //const newCard = new Card(req.body);

    const newCard = new Card({
      heading,
      subheading,
      desc,
      pic: pic.map(pic => ({
        public_id: pic.public_id,
        url: pic.url,
      })),
    });
    
  try {
    const savedCard = await newCard.save();
    res.status(200).json(savedCard);
  } catch (err) {
    next(err);
  }
};

const getCards = async (req, res, next) => {
  try {
    const Cards = await Card.find();
    res.status(200).json(Cards);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    createCard,
    getCards,
}