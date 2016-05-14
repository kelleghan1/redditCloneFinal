angular.module('redditClone')
.controller('redditController', ['$scope', 'postService', 'commentService', function($scope, postService, commentService) {
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
    $scope.newpost['date'] = new Date();
    console.log($scope.newpost);

    // submitPostService.all($scope.newpost)
  }

}])
