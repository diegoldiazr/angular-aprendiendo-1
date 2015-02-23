angular.module('AngStarter')
 .controller('UsersCtrl', ['$scope', '$http', function ($scope, $http) {
    var usuarios = $http({
        method: 'GET',
        url: '../test/json/usuarios.json'
    }).success(function(data, status){
        $scope.usuarios = data;
    }).error(function(data, status){
        console.log(data, status);
    });
 }])