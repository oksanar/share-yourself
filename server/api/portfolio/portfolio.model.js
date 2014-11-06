'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
        title: String,
        body: String,
        create_date: String,
        update_date: String,
        images: [
            {
                name: String,
                url: String
            }
        ],
        client: {
            name: String,
            www: String
        },
        author: String,
        active: Boolean
    });

module.exports = mongoose.model('Portfolio', PortfolioSchema);