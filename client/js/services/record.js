angular.module('recordService', [])
  .factory('Record', function($http){
    return {
      get: function(id){
        return $http.get('/api/records/' + id);
      },
      update: function(data){
        return $http.put('/api/records/' + data.id, data);
      }
    }
    });