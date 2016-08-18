var app = require('app');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    // Now set up the states
    $stateProvider

        .state('/', {
            url: '/',
            templateUrl: 'main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })

}]);
