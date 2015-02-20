angular.module('AngStarter')
.config(['$provide', function($provide){
    $provide.decorator('Playlist', ['$delegate', function($delegate){
        $delegate.texto = function(){
            return $delegate.listar().join(', ');
        };    
        return $delegate;
    }]);
}])