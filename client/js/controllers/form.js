angular.module('reforms')
  .controller('formController', function($scope, $routeParams, Record){

    var $form = $('.ui.form'),
        $dimmer = $('.ui.dimmer');

    Record.get($routeParams.id)
        .success(function(data){
          $scope.data = data
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
