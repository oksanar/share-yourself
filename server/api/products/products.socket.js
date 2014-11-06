/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Products = require('./products.model');

exports.register = function(socket) {
  Products.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Products.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('products:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('products:remove', doc);
}