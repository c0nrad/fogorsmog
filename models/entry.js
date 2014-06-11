var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  filepath: String,
  isSmog: Boolean
})

module.exports = mongoose.model('Entry', EntrySchema)