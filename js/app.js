angular.module('myApp',['ngRoute','route','in_theatersModule','myServiceModule',
    'searchModule','coming_soonModule','top250Module'])
    .controller('navBarCtrl',['$scope','$location', function ($scope,$location) {
        $scope.isActive="in_theaters";
        $scope.search= function () {
            $location.path('/search/'+$scope.keyword+'/1');
        }
    }])