'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $routeParams, $http) {
  var url = 'http://congen.co/clickbait/test.json';
  $http.get(url).then(function(content) {
    $scope.articles = content.data;
    angular.forEach($scope.articles, function(key, value) {
      key.id = value;
    });
    $scope.pineapple = $scope.articles[$routeParams.id];
  });
});