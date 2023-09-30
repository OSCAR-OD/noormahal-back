const Banner = require('../models/banner.js');
const createBanner = async (req, res, next) => {
    const { heading, subheading, desc, pic} = req.body

     if (!heading || !subheading|| !desc|| ! pic) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    //const newBanner = new Banner(req.body);

    const newBanner = new Banner({
      heading,
      subheading,
      desc,
      pic: pic.map(pic => ({
        public_id: pic.public_id,
        url: pic.url,
      })),
    });
    
  try {
    const savedBanner = await newBanner.save();
    res.status(200).json(savedBanner);
  } catch (err) {
    next(err);
  }
};

const getBanners = async (req, res, next) => {
  try {
    const Banners = await Banner.find();
    res.status(200).json(Banners);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    createBanner,
    getBanners,
}