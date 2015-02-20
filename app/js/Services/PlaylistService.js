//js servicio para pag43.html
// al usar factory es singleton.
// si se usa service se crea una nueva instancia cuando son utilizados
angular.module('AngStarter')
.service('PlaylistService', [function(){
    var playlist = [
        'The miracle',
        'Raised by wolves',
        'every break you take',
        'imagine by john lennon',
        'yesterday by paul mccartney',
        'volcano',
        'Iris'
    ];
    this.listar = function(){return playlist;};
    this.borrar = function(id){playlist.splice(id,1);};
    
}])