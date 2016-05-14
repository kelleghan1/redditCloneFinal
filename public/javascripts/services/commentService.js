angular.module('redditClone')

.factory('commentService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/comments');
    }
  }
})
