'use strict';
const mongoose = require('mongoose');
const async = rewuire('async');
const User = mongoose.model('User');
const Room = mongoose.model('Room');
const Booking = mongoose.model('Booking');

/**
 * This function gets all the rooms in the Database
 */
exports.get_all_rooms = (req, res) => {
  Room.find({}, (err, rooms) => {
    if (err) {
      res.send({
        error: err,
        message: 'No rooms fround',
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


/**
 * Gets a single room using the room ID sent as a url parameter
 */
exports.get_single_room = (req, res) => {
  Room.findById(req.params.roomId, (err, room) => {
    if (err) {
      res.send({
        error: err,
        message: 'Couldn\'t find room',
        code: 400
      });
    }
    res.send({
      message: 'Room found',
      data: room,
      code: 200
    });
  });
};

/**
 * Updates a user. Finds them via the user ID in the url parameter
 */
exports.book_a_room = (req, res) => {
  const roomId = req.params.roomId;
  const bookingData = req.body.data.bookingData;

  Room.findByIdAndUpdate({
      _id: roomId
    }, {
      $push: {
        bookings: bookingData
      }
    },
    (err, room) => {
      if (err) {
        res.send({
          error: err,
          message: 'Couldn\'t update room',
          code: 400
        });
      };
      res.send({
        message: 'room booked successfully',
        data: room,
        code: 200
      });
    });
};

/**
 * Deletes the user from the db
 * TODO: Change method to status 'deleted in db'
 * TODO: Then if they really want to delete have admin do it?
 */
exports.cancel_a_booking = (req, res) => {
  const roomId = req.params.roomId;
  const bookingId = req.body.data.bookingId;

  Room.findByIdAndUpdate({
      _id: roomId
    }, {
      $pull: {
        bookings: bookingId
      }
    },
    (err, room) => {
      if (err) {
        res.send({
          error: err,
          message: 'Couldn\'t update room',
          code: 400
        });
      };
      res.send({
        message: 'room booked successfully',
        data: room,
        code: 200
      });
    });
  };
