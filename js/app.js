var app = angular.module("myApp", ['ngRoute', 'ui.grid']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        controller: 'MainController',
        templateUrl: "./js/views/demo.html"
    })
    .when('/ui',{
        controller: 'UiController',
        templateUrl: "./js/views/uigrid.html"
    })
    .otherwise({
        redirectTo:'/'
    })
})