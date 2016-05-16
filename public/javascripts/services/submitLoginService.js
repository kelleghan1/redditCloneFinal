angular.module('redditClone')

.factory('submitLoginService', function ($http, $window) {
  return {
    add: function(login) {
      $http.post('/api/login', login)
      .then(function(response){
        // console.log(response);
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
