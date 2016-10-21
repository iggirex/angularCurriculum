angular.module("pokePromise")
  .controller("myCtrl", function($scope, pokeFactory){
    console.log("in controller this is pokeFactory", pokeFactory.catchEm())
    $scope.view = {}
    pokeFactory.catchEm()
    .then(function(data){
      console.log("on the controller this is data", data)
      $scope.view.pokeThangz = data
    })
    // $scope.$digest()
  })
