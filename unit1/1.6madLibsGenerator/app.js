var app = angular.module("firstApp", []);
var time = new Date;
console.log(time)

app.controller("myFirstController", function($scope){
  $scope.name = "Severus Snape";
  $scope.favColor = "purple";
  $scope.secondsInACentury = (60*60*24*7*52*100);
  $scope.rightNow = new Date();
});
app.controller("exercisesController", function($scope){
  $scope.favColor = "purple";
});
// app.controller("madlibsCtrl", function($scope){
//   $scope.boyName = "hehie";
//   $scope.adj = "aaaaaaaa";
//   $scope.pn1 = "sddddsddsd";
//   $scope.pn2 = "tttttttt";
//   $scope.insect = "dddddd";
//   $scope.pn3 = "dddddd";
//   $scope.verb = "hehie";
// })
