angular.module("pokePromise", ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "myCtrl"
    })
  })
