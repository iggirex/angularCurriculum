angular.module("myCalc", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "calcCtrl"
        });
    });
