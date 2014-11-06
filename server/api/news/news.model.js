'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NewsSchema = new Schema({
    title: String,
    body: String,
    create_date: String,
    update_date: String,
    author: String,
    active: Boolean
});

module.exports = mongoose.model('News', NewsSchema);