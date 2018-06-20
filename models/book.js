var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  isbn:String,
  title:String,
  author:String,
  description:String,
  publishedYear:String,
  publisher:String,
  updateDate:{
    type:Date,
    default:Date.now
  },
});

module.exports= mongoose.model('book',bookSchema);


