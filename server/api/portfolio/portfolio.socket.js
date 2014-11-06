/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Portfolio = require('./portfolio.model');

exports.register = function(socket) {
  Portfolio.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Portfolio.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('portfolio:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('portfolio:remove', doc);
}