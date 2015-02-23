// configuracion para el PlaylistProvider

angular.module('AngStarter')
.config(['PlaylistProvider', function(PlayalistProvider){
    var canciones = [
        'every breath you take',
        'imagine by john lennon',
        'yesterday by paul mccartney',
        'volcano',
        'Iris'    
    ];
    console.log("pasa por el config");
    PlayalistProvider.agregar(canciones);
}])