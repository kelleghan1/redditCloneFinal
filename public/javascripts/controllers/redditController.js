angular.module('redditClone')
.controller('redditController', ['$scope', 'postService', 'commentService', 'submitPostService', 'submitUserService', '$window', '$location', function($scope, postService, commentService, submitPostService, submitUserService, $window, $location) {
  $scope.vm ={};
  $scope.vm.postResult;
  $scope.vm.commentResult;

  postService.all()
  .then(function(response){
    $scope.vm.postResult = response
  })

  commentService.all()
  .then(function(response){
    $scope.vm.commentResult = response
  })

  $scope.submitPost = function(){
    $scope.newPost['date'] = new Date();
    $scope.newPost['score'] = 0;
    submitPostService.add($scope.newPost);
    $scope.vm.postResult.data.push($scope.newPost);
  }

  $scope.submitUser = function(){
    submitUserService.add($scope.newUser)

  }

  $scope.submitLogin = function(){
    submitLoginService.add($scope.login)
    .then(function(response){
      console.log(response);
    })
  }

  $scope.logout = function(){
    $window.localStorage.clear();
  }

}])
