angular.module("movieApp", ["ngRoute"])
.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "views/home.html",
    controller: "homeCtrl"
  })
  .when("/movieResults/id:", {
    templateUrl: "views/movieResults.html",
    controller: "movieResCtrl"
  })
  .when("/movie/:id", {
    templateUrl: "views/movie.html",
    controller: "movieCtrl"
  })
})
