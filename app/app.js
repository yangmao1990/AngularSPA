var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
    .when('/',
    {
        controller: 'IndexController',
        templateUrl:'app/partials/default.html'
    })
    .when('/about',
    {
        controller: 'IndexController',
        templateUrl:'app/partials/about.html'
    })
     .when('/contacts',
     {
         controller: 'IndexController',
         templateUrl:'app/partials/contacts.html'
     })
     .when('/customers',
     {
         controller: 'CustomerController',
         templateUrl:'app/partials/customers.html'
     })
    .otherwise({rediectTo:'/'});
});