angular.module('route',[])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/in_theaters/:page',{
				templateUrl:'views/in_theaters/in_theaters.html',
				controller: 'in_theatersCtrl'
			})
			.when('/search/:keyword/:page',{
				templateUrl:'views/search/search.html',
				controller: 'searchCtrl'
			})
			.when('/coming_soon/:page',{
				templateUrl:'views/coming_soon/coming_soon.html',
				controller: 'coming_soonCtrl'
			})
			.when('/top250/:page',{
				templateUrl:'views/top250/top250.html',
				controller: 'top250Ctrl'
			})

			.otherwise('in_theaters/1');
	}])



