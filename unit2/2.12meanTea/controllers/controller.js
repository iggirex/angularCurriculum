angular.module("meanTea")
.controller("homeCtrl", function($scope, $http){
  // console.log("in home ctrl")
  $http.get("../models/data.json")
  .success(function(res){
    $scope.view = {}
    $scope.view.teas = res
    console.log(res)
  })
})
