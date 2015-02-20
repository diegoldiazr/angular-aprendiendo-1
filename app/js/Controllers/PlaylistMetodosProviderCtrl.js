// js controlador para pag43.html
angular.module('AngStarter')
.controller('PlaylistMetodosProviderCtrl', ['$scope', 'Playlist', function($scope, Playlist){
    $scope.playlist = Playlist.listar();
    console.log("decorator valor inicial: " + Playlist.texto());
    $scope.borrar = function(id){
        Playlist.borrar(id);
        console.log("decorator valor tras el borrado: " + Playlist.texto());
    };
    
}]);