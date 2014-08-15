var reforms = angular.module('reforms', ['ngRoute']);

// Client side routes
reforms.config(function($routeProvider, $locationProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
      })

      .when('/:id', {
        templateUrl: 'partials/form.html',
        controller: 'formController'
      });

  $locationProvider.html5Mode(true);
});

