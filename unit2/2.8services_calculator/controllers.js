angular.module("myApp")
  .controller("FirstController", function($scope, firstService){
    $scope.view = {};
    $scope.view.greeting = firstService.sayHi();
    $scope.view.users = firstService.getAllUsers();
  })
