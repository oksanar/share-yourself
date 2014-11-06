/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Generic = require('./generic.model');

exports.register = function(socket) {
  Generic.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Generic.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('generic:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('generic:remove', doc);
}