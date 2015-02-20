// js controlador para pag43.html
angular.module('AngStarter')
.controller('PlaylistMetodosProviderCtrl', ['$scope', 'Playlist', function($scope, Playlist){
    $scope.playlist = Playlist.listar();
    $scope.borrar = function(id){Playlist.borrar(id);};
}]);