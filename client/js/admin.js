var admin = angular.module('admin', [
  'recordService']);

admin
    .controller('recordsController', function($scope, Record){
      Record.getAll()
          .success(function(data){
            $scope.records = data;
          })
    });
