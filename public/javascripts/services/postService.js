angular.module('redditClone')

.factory('postService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/posts');
    }
  }
})
