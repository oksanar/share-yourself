'use strict';

var _ = require('lodash');
var News = require('./news.model');

// Get list of newss
exports.index = function(req, res) {
  News.find(function (err, newss) {
    if(err) { return handleError(res, err); }
    return res.json(200, newss);
  });
};

// Get a single news
exports.show = function(req, res) {
  News.findById(req.params.id, function (err, news) {
    if(err) { return handleError(res, err); }
    if(!news) { return res.send(404); }
    return res.json(news);
  });
};

// Creates a new news in the DB.
exports.create = function(req, res) {
  News.create(req.body, function(err, news) {
    if(err) { return handleError(res, err); }
    return res.json(201, news);
  });
};

// Updates an existing news in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  News.findById(req.params.id, function (err, news) {
    if (err) { return handleError(res, err); }
    if(!news) { return res.send(404); }
    var updated = _.merge(news, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, news);
    });
  });
};

// Deletes a news from the DB.
exports.destroy = function(req, res) {
  News.findById(req.params.id, function (err, news) {
    if(err) { return handleError(res, err); }
    if(!news) { return res.send(404); }
    news.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}