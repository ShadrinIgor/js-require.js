require( ['Models/User', 'Controllers/ListController', 'Controllers/AddController' ], function( User, ListController, AddController ){

    var users = [
        new User('Igor'),
        new User('Sasha'),
        new User('Masha')
    ];

/*
    for( var i=0;i<users.length;i++ ){
        console.log( users[i] );
    }
*/

    localStorage.users = JSON.stringify( users );

    AddController.start();
    //ListController.start();
} );