'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  _bookingId: Schema.ObjectId,
  user: { type: Schema.ObjectId, ref: 'User'},
  bookingStart: Date,
  bookingEnd: Date,
  startHour: Number,
  duration: Number,
  recurring: [],
  floor: Number,
  purpose: { type: String, required: true},
  roomId: { type: Schema.ObjectId, ref: 'Room'}
});


module.exports = mongoose.model('Booking', BookingSchema);
