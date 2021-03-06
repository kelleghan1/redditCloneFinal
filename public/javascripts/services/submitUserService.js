angular.module('redditClone')

.factory('submitUserService', function ($http, $window) {
  return {
    add: function(newUser) {
      $http.post('/api/submituser', newUser)
      .then(function(response){
        console.log(response);
        if (response.data.error) {
          console.log(response.data.error);
          return response.data.error
        }else{
          $window.localStorage.setItem('token', response.data.name);
        }
      })
    }
  }
})
