/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var News = require('./news.model');

exports.register = function(socket) {
  News.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  News.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('news:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('news:remove', doc);
}