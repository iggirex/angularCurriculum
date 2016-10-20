angular.module("myCalc")
  .controller("calcCtrl", function($scope, calcService){
    $scope.view = {}
    $scope.calculate = function(a, b){
      console.log(a, b, $scope.operationSelect);
      if($scope.operationSelect === "add"){
        $scope.view.answer = calcService.add(a, b)
      } else if($scope.operationSelect === "subtract"){
        $scope.view.answer = calcService.subtract(a, b)
      } else if($scope.operationSelect === "multiply"){
        $scope.view.answer = calcService.multiply(a, b)
      } else if($scope.operationSelect === "divide"){
        $scope.view.answer = calcService.divide(a, b)
      } else if($scope.operationSelect === "power"){
        $scope.view.answer = calcService.power(a, b)
      }
    }
  })
