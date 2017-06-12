var myModule = angular.module('app.directives', []);

myModule.directive('myHeader', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    templateUrl: sitePrefix+'/AngularJsHeader'
  };
});