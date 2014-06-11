var app = angular.module('app', ['ngRoute', 'ngResource'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/landing.html',
      controller: 'LandingController'
    })

    .when('/new', {
      templateUrl: 'templates/new.html',
      controller: 'NewController'
    })

    .otherwise({
      redirectTo: '/'
    });
})

app.controller('LandingController', function() {
})

app.factory('Entry', function($resource) {
  return $resource('/api/entries/:_id', {_id: "@_id"}, {'update': {method: 'PUT'}})
})

app.controller('NewController', function(Entry, $scope) {
  $scope.entry = new Entry()
  $scope.isSmog = [{text: "fog", value: false} , {text: "smog", value: true}]


  $scope.onFileSelect = function($files) {
    var file = $files[0];
    $scope.upload = $upload.upload({
      url: 'upload',
      method: 'POST',
      file: file, 
    }).success(function(data, status, headers, config) {
      $scope.entry.filepath = data
    });
  }

  $scope.save = function() {
    $scope.entry.$save()
    $scope.entry = new Entry()
  }


})
