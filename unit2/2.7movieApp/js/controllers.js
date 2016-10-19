angular.module("movieApp")
.controller("movieCtrl", function($scope, $http){
  $scope.view = {}
  console.log("inside my controller")
  $http.get("http://www.omdbapi.com/?t=star&y=&plot=short&r=json")
  .then(function(data){
    console.log(data)
    $scope.view.data = data
  })
})
.controller("homeCtrl", function($scope, $location, $rootScope){
  console.log($scope.itemForSearch)
  $rootScope.itemForSearch = $scope.itemForSearch
  $scope.searchThis = function(){
    $location.path("movieResults/" + $scope.itemForSearch)
  }
})
.controller("movieResCtrl", function($scope, $http, $rootScope){
  $scope.view = {}
console.log("getting $scope.itemForSearch", $rootScope.itemForSearch)
  $http.get("http://www.omdbapi.com/?" + $rootScope.itemForSearch)
  .then(function(data){
    console.log(data)
    $scope.view.data = data
  })
})
