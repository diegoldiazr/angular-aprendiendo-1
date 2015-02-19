angular-aprendiendo-1
===========

Proyectos para aprender angular partiendo de la estructura que hizo mriverodorta@gmail.com.

Para poder ver el proyecto sin descargar pulsa: https://codenvy.com/f?id=khzz8vj68tbi4p7l Gracias a Codenvy ;)

Getting Started
===========
To get you started you simply clone this repository and install the dependencies with bower
I changed the bower components folder to inside the app directory through the .bowerrc file to make ir accesible to the application on the server.

###Clone ang-starter
```
git clone https://github.com/diegoldiazr/angular-aprendiendo-1.git
cd angular-aprendiendo-1
```

###Install Dependencies
This project only depends on angular and angular-route packages to get them you can use bower
```
bower install
```

###Directory Layout
```
├── app                                 --> All of the application files
│   ├── css                             --> Css files for the application
│   │   └── app.css                     --> Application main style
│   ├── img                             --> Images folder
│   ├── index.html                      --> Application index
│   ├── js                              --> Application javascript code
│   │   ├── app.js                      --> Application deffinition
│   │   ├── Config                      --> Application config folder
│   │   │   ├── Bootstrap.js            --> Application bootstrap
│   │   │   ├── Constants.js            --> Application Constants
│   │   │   ├── HTTP.js                 --> Application Http configuration
│   │   │   ├── Packages                --> Application packages configuration folder
│   │   │   ├── RequestInterceptor.js   --> Application Request Interceptor
│   │   │   ├── ResponseInterceptor.js  --> Application Response Interceptor
│   │   │   ├── Routes.js               --> Application Routes
│   │   │   └── Security.js             --> Application Security config
│   │   ├── Controllers                 --> Application Controllers folder
│   │   │   ├── AboutCtrl.js            --> Application controller for about page
│   │   │   ├── ContactCtrl.js          --> Application controller for contact page
│   │   │   └── HomeCtrl.js             --> Application controller for home page
│   │   ├── Directives                  --> Application Directives folder
│   │   │   └── year.js                 --> Application Sample Directive
│   │   ├── Filters                     --> Application Filters folder
│   │   │   └── word.js                 --> Application Sample filter
│   │   ├── Models                      --> Application Models folder
│   │   │   └── Crud.js                 --> Application Sample model
│   │   ├── Services                    --> Application Services folder
│   │   │   └── Auth.js                 --> Application Sample service
│   │   └── test.js                     --> Tests
│   └── partials                        --> Application Partials folder
│       ├── about.html                  --> Application about partial
│       ├── contact.html                --> Application contact partial
│       └── home.html                   --> Application home partial
├── bower.json                          --> Application dependencies
├── LICENSE                             --> Application Licence (MIT)
├── README.md                           --> Application this file
└── test                                --> Application Tests folder
```

###Serving files
To serve the application you just need the app directory for production.

###Contact
You can contact with me at diegoldiazr@gmail.com

Thnaks to mriverodorta@gmail.com.