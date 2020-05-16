'use strict';

module.exports = function(app) {
  const todoList = require('./controller');

  app.route('/').get(todoList.index);
  app.route('/users').get(todoList.users);
  app.route('/add').post(todoList.add_user);
  app.route('/vacant').get(todoList.get_vacant);
  app.route('/own_seat').get(todoList.get_own_seat);
  app.route('/seats').get(todoList.get_seats);
  app.route('/seatsbychair').get(todoList.get_seats_bychair);
  app.route('/va').get(todoList.get_va);
  app.route('/status').get(todoList.get_status);
  app.route('/review').get(todoList.get_review);
  app.route('/set_seat').post(todoList.set_seat);
  app.route('/set_status').post(todoList.set_status);
  app.route('/set_rating_and_review').post(todoList.set_rating_and_review);
  app.route('/movie_details').get(todoList.get_movie_details);
};
