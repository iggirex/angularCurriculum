angular.module("applydigest", []).controller("MainController", function($rootScope, $scope) {
  $rootScope.rootView = {};
  $rootScope.rootView.name = "Fido";
  $scope.view = {};
  $scope.view.age = 3;

  // there is a $timeout which handles $apply for you
  setTimeout(function() {
    $rootScope.rootView.name = "Lassie";
    $scope.view.age = 10;
    $scope.$digest();
    // $scope.$apply();
  }, 1000);
});
