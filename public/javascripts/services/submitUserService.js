angular.module('redditClone')

.factory('submitUserService', function ($http, $window) {
  return {
    add: function(newUser) {
      $http.post('/api/submituser', newUser)
      .then(function(response){
        console.log(response);
        $window.localStorage.setItem('token', response.data.name);
      })
    }
  }
})
