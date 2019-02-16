'use strict';
module.exports = function (app) {
  const userController = require('../controllers/userController');

  /**
   * User Routes
   */
  app.route('/api/login')
    .post(userController.login_a_user);

  app.route('/api/register')
    .post(userController.create_a_user);
  

};
