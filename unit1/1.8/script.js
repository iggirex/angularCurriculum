var app = angular.module("myApp", [])
app.controller("myCtrl", function($scope){
  $scope.view = {};
  $scope.view.number= 4;
  $scope.pickRandomNumber = function(){
    $scope.view.number = Math.floor(Math.random() * 10) +1;
    console.log('getting CA')
  };
});
app.controller("reverseCtrl", function($scope){
  $scope.reverse = function(){
    var input = $scope.viewRev.stringReverse;
    $scope.viewRev.stringReverse = input.split("").reverse().join("");
  };
});
app.controller("pongCtrl", function($scope){
  $scope.pong = {};
  $scope.pong.leftScore = 0;
  $scope.pong.rightScore = 0;
  $scope.reset = function(){
    console.log("this workzzzzz");
  };
  $scope.leftScoreIncrease = function(){
    if($scope.pong.leftScore < 11){
    $scope.pong.leftScore++
  } else{
    $scope.pong.leftScore = 11;
  };
};
  $scope.rightScoreIncrease = function(){
    if($scope.pong.rightScore < 11){
    $scope.pong.rightScore++
  } else{
    $scope.pong.rightScore = 11;
    document.getElementByClassName("right").addClass("won")
  };
};
  $scope.reset = function(){
    $scope.pong.leftScore = 0;
    $scope.pong.rightScore = 0;
  };
});
