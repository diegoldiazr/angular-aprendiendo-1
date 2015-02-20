// configuracion para el PlaylistProvider

angular.module('AngStarter')
.config(['PlaylistProvider', function(PlayalistProvider){
    var canciones = [
        'every break you take',
        'imagine by john lennon',
        'yesterday by paul mccartney',
        'volcano',
        'Iris'    
    ];
    console.log("para por el config");
    PlayalistProvider.agregar(canciones);
}])