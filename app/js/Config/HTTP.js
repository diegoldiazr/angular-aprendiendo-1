/**
 * Created by Maikel Rivero Dorta mriverodorta@gmail.com on 7/08/14.
 */
'use strict';
angular.module('AngStarter')
    .config(['$httpProvider', function($httpProvider) {

        /**
         * Configure the $httpProvider here
         */
        
        // Push the Request and Response Interceptor here
        // $httpProvider.interceptors.push('RequestInterceptor');
        // $httpProvider.interceptors.push('ResponseInterceptor');
        
        $httpProvider.defaults.transformResponse.push(function(data){
            data.push({
                "nombre": "Junior incorporado",
                "apellidos": "Como un transform response",
                "email": "junior@example.com",
                "lenguajes": ["es"]
                });
            return data;
        })
    }])
