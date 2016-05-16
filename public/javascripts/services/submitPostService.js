angular.module('redditClone')

.factory('submitPostService', function ($http) {
  return {
    add: function(newPost) {
       $http.post('/api/submitpost', newPost);
    }
  }
})
