//js servicio para pag43.html
angular.module('AngStarter')
.factory('PlaylistService', [function(){
    var playlist = [
        'The miracle',
        'Raised by wolves',
        'every break you take',
        'imagine by john lennon',
        'yesterday by paul mccartney',
        'volcano',
        'Iris'
    ];
    var listar = function(){return playlist;};
    var borrar = function(id){playlist.splice(id,1);};
    return{
        listar: listar,
        borrar: borrar
    };
}])