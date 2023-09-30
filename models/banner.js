const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  pic:[
    {
           public_id: {
              type: String,
              //required: true
            },
            url: {
              type: String,
               required: true
            }
        }
      ]
      });

module.exports = mongoose.model('banner', bannerSchema);