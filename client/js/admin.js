var admin = angular.module('admin', [
  'recordService',
  'ngAnimate']);

admin
    .controller('recordsController', function($scope, Record){

      $scope.newRecord = {};

      $scope.create = function(){
        Record.create($scope.newRecord)
            .success(function(data){
              $scope.records.push(data.doc);
              $scope.success = {
                title: data.doc.title,
                url: location.host + '/' + data.doc._id
              };
              $('.ui.page.dimmer').dimmer('show');
              resetForm();
            })
      };

      function resetForm(){
        $scope.newRecord = {}
      }

      Record.getAll()
          .success(function(data){
            $scope.records = data;
          });

      $scope.goTo = function(id){
        location.href = '/' + id;
      };

      $scope.remove = function(idx){
        var record = $scope.records[idx];
        if(confirm('Are you sure you want to remove ' + record.title + '?')) {
          Record
              .remove(record._id)
              .success(function(){
                $scope.records.splice(idx, 1);
              })
        }
      };
    });


