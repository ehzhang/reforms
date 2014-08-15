angular.module('reforms')
  .controller('formController', function($scope, $routeParams){
    $scope.message = 'This is the form for ' + $routeParams.id
  });
