// Controlador para pag43.html
angular.module('AngStarter')
.controller('PlaylistCtrl', ['$scope', 'PlaylistService', function($scope, PlaylistService){
    $scope.playlist = PlaylistService.listar();
}]);