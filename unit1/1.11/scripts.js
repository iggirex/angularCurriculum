var app = angular.module("redditClone", []);
app.controller("myCtrl", function($scope){
  $scope.form = {};
  $scope.posts = [];
  $scope.submitPost = function(input){
    $scope.posts.push({
      title: input.title,
      author: input.author,
      image: input.image,
      description: input.description,
      votes: 0
    });
    console.log("this is $scope.posts,", $scope.posts);
  };
  $scope.upVote = function(post){
    post.votes++;
    console.log(post.votes)
  };
  $scope.downVote = function(post){
    post.votes--;
  };
});
// app.controller("postCtrl", function($scope){
//   console.log("inside post controller");
// });
