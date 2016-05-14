angular.module('redditClone')

.factory('submitPostService', function ($http, newpost) {
  return {
    all: function(newpost) {
      // return $http.get('/api/posts');
      console.log(newpost);
    }
  }
})
