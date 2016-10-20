var app = angular.module("contacts", []);

app.controller("myCtrl", function($scope){
  $scope.form = {};
  $scope.collection= [];
  $scope.submitEntry = function(form){
    var thisOneThing = {name: form.name, email: form.email, phone: form.phone};
    $scope.collection.push(thisOneThing);
  };
  $scope.clearOut = function(form){
    $scope.form= null;
  };
  // $scope.
});
