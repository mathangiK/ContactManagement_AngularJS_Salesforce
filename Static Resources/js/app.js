var app = angular.module('app',['ngRoute','app.controllers','app.factory','app.directives']);  
  console.log('app');

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: sitePrefix+'/AngularJSPage_Partial'
      , controller: 'listViewController'
    })
    .when('/listView', {
      templateUrl: sitePrefix+'/AngularJSPage_Partial',
      controller: 'listViewController'
    })
    .when('/detailView/:recordID', {
      templateUrl: sitePrefix+'/AngularJSPage_Partial2',
      controller: 'detailController'
    })
    .otherwise({redirectTo: '/'});
}]);
