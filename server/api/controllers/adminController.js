'use strict';
const mongoose = require('mongoose');
const Room = mongoose.model('Room');
const Booking = mongoose.model('Booking');
const User = mongoose.model('User');

/**
 * This Controller will deal with the requests that an admin will need.
 * More analytics functions:
 * How many bookings a room had last month
 * How many bookings a room had in the last 3 months
 * How many bookings a room has this month
 * What is the most popular room?
 * What user books the most?
 */
exports.get_current_months_bookings = (req, res) => {
  Room.findById({_id: req.params.roomId}, (err, room) => {
    if (err) {
      res.send({
        error: err,
        message: 'No room fround',
        code: 204
      });
    }
    res.send({
      message: 'All rooms returned',
      data: rooms,
      code: 200
    });
  });
};
