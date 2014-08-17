angular.module('reforms')
  .controller('formController', function($scope, $routeParams, Record){

    var $form = $('.ui.form'),
        $dimmer = $('.ui.dimmer');

    $scope.data = false;

    Record.get($routeParams.id)
        .success(function(data){
          $scope.data = data
        })
        .error(function(){
          location.href = '/404'
        });

    $scope.submit = function(){

      $form.addClass('loading');

      Record
          .update($scope.data)
          .success(function(data){
            $form.removeClass('loading');
            $dimmer.dimmer('show');
            setTimeout(function(){
              $scope.data = data;
              $dimmer.dimmer('hide');
            }, 3000);
          })
          .error(function(){
            $form.removeClass('loading');
          });
    }
  });
