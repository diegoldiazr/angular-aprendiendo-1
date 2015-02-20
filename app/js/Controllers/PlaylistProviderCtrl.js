// Controlador para pag43.html
angular.module('AngStarter')
.controller('PlaylistProviderCtrl', ['$scope', 'Playlist', function($scope, Playlist){
    $scope.playlist = Playlist.listar();
}]);