angular.module('reforms')
  .controller('formController', function($scope, $routeParams, Record){
    $scope.message = 'This is the form for ' + $routeParams.id

    Record.get($routeParams.id)
        .success(function(data){
          $scope.data = JSON.stringify(data, null, 2);
        })
  });
