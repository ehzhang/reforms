angular.module('reforms')
  .controller('formController', function($scope, $routeParams, Record){
    $scope.message = 'This is the form for ' + $routeParams.id;

    Record.get($routeParams.id)
        .success(function(data){
          $scope.data = data
        });

    $scope.submit = function(){
      Record
          .update($scope.data)
          .success(function(data){
            location.reload();
          });
    }
  });
