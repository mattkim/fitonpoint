'use strict';

angular.module('seedlyApp')
  .controller('MainCtrl', function ($scope, $cookieStore, User) {
    $scope.user = {};
    if($cookieStore.get('token')) {
      $scope.user = User.get();
    }
 });
