// Controlador para pag43.html
angular.module('AngStarter')
.controller('PlaylistFactoryCtrl', ['$scope', 'PlaylistFactory', function($scope, PlaylistFactory){
    $scope.playlist = PlaylistFactory.listar();
}]);