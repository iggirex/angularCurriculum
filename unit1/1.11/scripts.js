var app = angular.module("redditClone", []);
app.controller("myCtrl", function($scope){
  $scope.myVar = false;
  $scope.today = new Date();
  $scope.form = {};
  $scope.posts = [];
  $scope.submitPost = function(input){
    $scope.posts.push({
      title: input.title,
      author: input.author,
      image: input.image,
      description: input.description,
      votes: 0,
      seeComments: false,
      comments: [],
      commentShow: false
    });
    input.title = "";
    input.author = "";
    input.image = "";
    input.description = "";  
  };
  $scope.upVote = function(post){
    console.log("this is vote post,",post)
    post.votes++;
  };
  $scope.downVote = function(post){
    post.votes--;
  };
  $scope.showAddComment = function(post){
    console.log("inside show addcomment, tjhis is post:", post);
    post.commentShow = !post.commentShow;
  };
  $scope.submitComment = function(post, form){
    console.log("this is post", post)
    post.comments.push({
      user: post.commentUser,
      comment: post.comment
    })
    form.commentUser = "";
    form.comment = "";
  };
  $scope.seeComments = function(post){
    post.seeComments = !post.seeComments;
  };
});
