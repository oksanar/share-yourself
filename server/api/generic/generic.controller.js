'use strict';

var _ = require('lodash');
var Generic = require('./generic.model');

// Get list of generics
exports.index = function(req, res) {
  Generic.find(function (err, generics) {
    if(err) { return handleError(res, err); }
    return res.json(200, generics);
  });
};

// Get a single generic
exports.show = function(req, res) {
  Generic.findById(req.params.id, function (err, generic) {
    if(err) { return handleError(res, err); }
    if(!generic) { return res.send(404); }
    return res.json(generic);
  });
};

// Creates a new generic in the DB.
exports.create = function(req, res) {
  Generic.create(req.body, function(err, generic) {
    if(err) { return handleError(res, err); }
    return res.json(201, generic);
  });
};

// Updates an existing generic in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Generic.findById(req.params.id, function (err, generic) {
    if (err) { return handleError(res, err); }
    if(!generic) { return res.send(404); }
    var updated = _.merge(generic, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, generic);
    });
  });
};

// Deletes a generic from the DB.
exports.destroy = function(req, res) {
  Generic.findById(req.params.id, function (err, generic) {
    if(err) { return handleError(res, err); }
    if(!generic) { return res.send(404); }
    generic.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}