angular.module("movieApp")
.controller("movieCtrl", function($scope, $http, $routeParams){
  console.log("in movieCtrl")
  $scope.view = {}
  $http.get("http://www.omdbapi.com/?t=" + $routeParams.id)
  .then(function(data){
    console.log(data)
    $scope.view.data = data;
  })
})
.controller("homeCtrl", function($scope, $location, $rootScope){
  console.log("in homeCTRL")
  // $rootScope.itemForSearch = $scope.itemForSearch
  $scope.searchThis = function(){
    $location.path("movieResults/" + $scope.itemForSearch)
  }
})
.controller("movieResCtrl", function($scope, $http, $routeParams, $location){
  console.log("in movie RESULTS ctrl")
  $scope.view = {}
// console.log("getting $scope.itemForSearch", $rootScope.itemForSearch)
  $http.get("http://www.omdbapi.com/?s=" + $routeParams.id)
  .then(function(data){
    console.log(data)
    $scope.view.data = data
  })
  $scope.movieDetails = function(movie){
    console.log("getting movie.title piped in:", movie)
    $location.path("movie/" + movie)
  }
})
