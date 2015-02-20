//js servicio para pag43.html
// al usar factory es singleton.
// si se usa service se crea una nueva instancia cuando son utilizados
// los provider permiten ser configurados en el momento en que se configura la aplicacion
// podemos hacer uso del metodo config del modulo.
// el archivo de configuracion se encuentra en la carpeta Config con el nombre PlaylistProvider.js

angular.module('AngStarter')
.provider('Playlist', function(){
    var playlist = [
        'The miracle',
        'Raised by wolves'
    ];
    var listar = function(){return playlist;};
    var borrar = function(id){playlist.splice(id,1);};
    
    return{
        agregar: function(data){
            console.log("agrega las canciones que falta el configurador");
            playlist = playlist.concat(data);
            
        },
        // $get es requerido por ser un provider
        $get: function(){
            return{
                listar : listar,    
                borrar : borrar
            }
        }
    };
    
})