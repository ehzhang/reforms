var reforms = angular.module('reforms', [
  'ngRoute',
  'recordService']);

// Client side routes
reforms.config(function($routeProvider, $locationProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
      })

      .when('/404', {
        templateUrl: 'partials/404.html'
      })

      .when('/:id', {
        templateUrl: 'partials/form.html',
        controller: 'formController'
      });

  $locationProvider.html5Mode(true);
});

