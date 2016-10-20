var app = angular.module("testRoutes", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'dogsController'
      })
});
