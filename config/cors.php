<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS
    |--------------------------------------------------------------------------
    |
    | allowedOrigins, allowedHeaders and allowedMethods can be set to array('*')
    | to accept any value.
    |
    */
   
    'supportsCredentials' => true,
    'allowedOrigins' => ['*'],
    'allowedHeaders' => ['Origin', 'Content-Type', 'X-Auth-Token', 'X-Requested-With', 'Accept', 'Authorization', 'X-CSRF-TOKEN', 'X-Socket-Id'],
    'allowedMethods' => ['GET', 'POST', 'OPTIONS'],
    'exposedHeaders' => [],
    'maxAge' => 0,

];
