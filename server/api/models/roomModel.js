'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  floor: {
    type: Number,
    unique: false
  },
  capacity: {
    type: Number,
    unique: false
  },
  assets: {
    macLab: {type: Boolean, default: false},
    teleconfrence: {type: Boolean, default: false},
    projector: {type: Boolean, default: false},
    tv: {type: Boolean, default: false},
    whiteboard: {type: Boolean, default: false},
  },
  bookings: []
});


module.exports = mongoose.model('Room', RoomSchema);
