'use strict';
module.exports = function (app) {
  const roomController = require('../controllers/roomController');

  /**
   * All Rooms Routes
   */
  app.route('/api/rooms')
    .get(roomController.get_all_rooms);
  // .post(roomController.create_room)

  /**
   * Individual Room Routes
   */
  app.route('/api/room/:roomId')
    .get(roomController.get_single_room);

  app.route('/api/room/book/:roomId')
    .post(roomController.book_a_room)

  app.route('/api/room/cancel/:roomId')
    .post(roomController.cancel_a_booking);

};
