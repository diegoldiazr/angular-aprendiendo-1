// js controlador para pag43.html
angular.module('AngStarter')
.controller('PlaylistMetodosServiceCtrl', ['$scope', 'PlaylistService', function($scope, PlaylistService){
    $scope.playlist = PlaylistService.listar();
    $scope.borrar = function(id){PlaylistService.borrar(id);};
}]);