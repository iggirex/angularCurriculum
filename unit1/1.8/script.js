var app = angular.module("myApp", [])
function alert(){
  console.log("yo alert works floarting out on its own")
}
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
  var counter = 0;
  var serveStyle;
  $scope.pong = {};
  $scope.pong.leftScore = 0;
  $scope.pong.rightScore = 0;
  $scope.reset = function(){
    console.log("this workzzzzz");
  };
  $scope.leftScoreIncrease = function(){
    if($scope.pong.leftScore < 10){
    $scope.pong.leftScore++
    counter+= 1
      if(counter % 2 === 0){
        $scope.pong.leftServeStyle = !$scope.pong.leftServeStyle
        $scope.pong.rightServeStyle = !$scope.pong.rightServeStyle
      }
  } else{
    $scope.pong.leftScore = 11;
    $scope.pong.leftWon = true
    $scope.pong.rightLose = true;
  };
};
  $scope.rightScoreIncrease = function(){
    if($scope.pong.rightScore < 10){
    $scope.pong.rightScore++
    counter+= 1
    if(counter % 2 === 0){
      $scope.pong.leftServeStyle = !$scope.pong.leftServeStyle
      $scope.pong.rightServeStyle = !$scope.pong.rightServeStyle
    }
  } else{
    $scope.pong.rightScore = 11;
    $scope.pong.rightWon = true
    $scope.pong.leftLose = true;
  };
};
//below can i refactor $scope.pong to = null??
  $scope.reset = function(){
    $scope.pong.leftScore = 0;
    $scope.pong.rightScore = 0;
    $scope.pong.rightWon = false;
    $scope.pong.leftLose = false;
    $scope.pong.leftWon = false;
    $scope.pong.rightLose = false;
    counter = 0;
  };
});
