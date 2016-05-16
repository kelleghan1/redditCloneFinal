angular.module('redditClone', ['ngRoute'])

.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'views/reddit.html',
    controller: 'redditController'
  })
  .when('/signup', {
    templateUrl: 'views/signup.html',
    controller: 'redditController'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'redditController'
  })
  .when('/logout', {
    templateUrl: 'views/logout.html',
    controller: 'redditController'
  })

})
