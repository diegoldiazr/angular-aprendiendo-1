/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
"use strict";
angular.module('AngStarter')
    .factory('ResponseInterceptor', ['$location', '$q', function($location, $q) {

        /**
         * Configure the Response Interceptor here
         */        
        console.log("response interceptor");
        
        var interceptor = {
            response: function(response){
                response.data.push({
                    nombre: 'Lorem',
                    apellidos: 'Ipsum Dolor cargado por intercepcion',
                    email: 'lorem@example.com',
                    lenguajes: ['en', 'es']
                })
                return response;
            }
        };
        
        return interceptor;
}]);
