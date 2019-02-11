'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User'},
  bookingStart: Date,
  bookingEnd: Date,
  startHour: Number,
  duration: Number,
  purpose: { type: String, required: true}
});


module.exports = mongoose.model('Booking', BookingSchema);
