angular.module("meanTea", ["ngRoute"])
.config(function($routeProvider){
  console.log("in rougthProvider")
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "homeCtrl"
    })
})
