'use strict';

var _ = require('lodash');
var Products = require('./products.model');

// Get list of productss
exports.index = function(req, res) {
  Products.find(function (err, productss) {
    if(err) { return handleError(res, err); }
    return res.json(200, productss);
  });
};

// Get a single products
exports.show = function(req, res) {
  Products.findById(req.params.id, function (err, products) {
    if(err) { return handleError(res, err); }
    if(!products) { return res.send(404); }
    return res.json(products);
  });
};

// Creates a new products in the DB.
exports.create = function(req, res) {
  Products.create(req.body, function(err, products) {
    if(err) { return handleError(res, err); }
    return res.json(201, products);
  });
};

// Updates an existing products in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Products.findById(req.params.id, function (err, products) {
    if (err) { return handleError(res, err); }
    if(!products) { return res.send(404); }
    var updated = _.merge(products, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, products);
    });
  });
};

// Deletes a products from the DB.
exports.destroy = function(req, res) {
  Products.findById(req.params.id, function (err, products) {
    if(err) { return handleError(res, err); }
    if(!products) { return res.send(404); }
    products.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}