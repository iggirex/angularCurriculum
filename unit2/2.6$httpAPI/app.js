angular.module("myApp", [])
.controller("someControllerName", function($scope, $http){
  $scope.view = {}
  $http.get("https://api.github.com/zen").then(function(data){
    console.log("this is data:", data)
    $scope.view.zenData = data;
  })
})
