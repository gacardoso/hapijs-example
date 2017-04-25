'use strict';
//import Hapi from 'hapi';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection( {

    port: 3000

} );

server.route( {

    method: 'GET',
    path: '/hello',
    handler: ( request, reply ) => {

        reply( 'Hello World!!!' );

    }

} );

server.start( err => {

    if( err ) {

        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

} );
