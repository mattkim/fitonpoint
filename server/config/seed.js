/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test',
    email: 'test@test.com',
    profilePictureURL: 'https://s3-us-west-1.amazonaws.com/pokipop/linkedinprofilepic.jpg',
    password: 'test'
  }, function(res) {
    console.log('finished populating users');
  });
});