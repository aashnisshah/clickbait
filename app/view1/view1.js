'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

}])

.controller('View1Ctrl', function($scope, $firebaseObject, $http) {
  var url = 'http://congen.co/clickbait/test.json';
  $http.get(url).then(function(content) {
    $scope.articles = content.data;
    angular.forEach($scope.articles, function(key, value) {
      key.id = value;
    });
  });

  var ref = new Firebase("https://boiling-fire-8955.firebaseio.com");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  $scope.increaseCount = function(id) {
    ref.transaction(function(current) {
      if( !current ) {
        current = '';
      }
      current[id] = (current[id] || 0) + 1;
      return current;
    });
  };
});
