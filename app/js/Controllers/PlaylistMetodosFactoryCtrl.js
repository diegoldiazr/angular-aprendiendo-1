// js controlador para pag43.html
angular.module('AngStarter')
.controller('PlaylistMetodosFactoryCtrl', ['$scope', 'PlaylistFactory', function($scope, PlaylistFactory){
    $scope.playlist = PlaylistFactory.listar();
    $scope.borrar = function(id){PlaylistFactory.borrar(id);};
}]);