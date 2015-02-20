// Controlador para pag43.html
angular.module('AngStarter')
.controller('PlaylistServiceCtrl', ['$scope', 'PlaylistService', function($scope, PlaylistService){
    $scope.playlist = PlaylistService.listar();
}]);