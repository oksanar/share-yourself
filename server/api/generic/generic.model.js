'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GenericSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Generic', GenericSchema);