var admin = angular.module('admin', [
  'recordService',
  'ngAnimate']);

admin
    .controller('recordsController', function($scope, Record){
      Record.getAll()
          .success(function(data){
            $scope.records = data;
          });

      $scope.goTo = function(id){
        location.href = '/' + id;
      }

    })
    .controller('createController', function($scope, Record){
      $scope.newRecord = {};

      $scope.create = function(){
        Record.create($scope.newRecord)
            .success(function(data){
              location.reload();
            })
      }
    });


