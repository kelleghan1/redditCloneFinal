angular.module('redditClone')
.controller('redditController', ['$scope', 'postService', 'commentService', function($scope, postService, commentService) {
  $scope.vm ={};
  $scope.vm.postResult;
  $scope.vm.commentResult;

  postService.all()
  .then(function(response){
    $scope.vm.postResult = response
    console.log(response);
  })

  commentService.all()
  .then(function(response){
    $scope.vm.commentResult = response
    console.log(response);
  })


}])
