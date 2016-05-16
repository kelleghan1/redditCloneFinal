angular.module('redditClone')

.factory('submitPostService', function ($http) {
  return {
    add: function(newPost) {
      console.log(newPost);
      $http.post('/api/submitpost', newPost);
    }
  }
})
