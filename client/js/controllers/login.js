angular.module('reforms')
  .controller('loginController', function($scope, $http){
    $scope.submit = function(){
      location.href = '/' + $scope.code;
    };

    $scope.login = function(){
      $http.post('/auth/login', {
        username: $scope.username,
        password: $scope.password
      }).success(function(){
        console.log(arguments)
      })
    };

    $scope.showLogin = function(){
      $('.ui.page.dimmer').dimmer('show')
    }
  });