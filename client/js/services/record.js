angular.module('recordService', [])
  .factory('Record', function($http){
    return {
      get: function(id){
        return $http.get('/api/records/' + id);
      },
      getAll: function(){
        return $http.get('/api/records')
      },
      update: function(data){
        return $http.put('/api/records/' + data._id, data);
      }
    }
  });