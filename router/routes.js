// ROUTER SETUP
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'views/admin-home/admin-home.html',
            controller:'profileCtrl',
        })
        .when('/messages', {
            templateUrl:'views/messages/messages.html',
            controller:'messagesCtrl',
        }).otherwise({
            redirectTo: '/'
        });
}]);