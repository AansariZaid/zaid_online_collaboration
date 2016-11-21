var freakapp = angular.module('freakapp',['ngRoute']);
freakapp.controller('mainCtrl',function($scope){
	$scope.message = "its Awesome"
});

// New Controller to Use NG Material for more Interactive Design

var newapp = angular.module('newapp',['ngMaterial','ngRoute']);

newapp.config(function($routeProvider, $locationProvider) {
	$routeProvider

	.when('/',{
		templateUrl: "app/components/page/home.html",controller : 'AppCtrl'
	})
	.when('/about',{templateUrl:"app/components/page/about.html",controller : 'aboutCtrl'})
	.when('/contact',{templateUrl: "app/components/page/contact.html",controller : 'contactCtrl'});
	
//use html 5 history api to get rid of # in link
	$locationProvider.html5Mode(true);


});

newapp.controller('aboutCtrl',function($scope){
	$scope.message = "Look this is About Page";
	
});

newapp.controller('contactCtrl',function($scope){
	$scope.message = "Look Now I am in Contact Page";
});

newapp.controller('AppCtrl', function($scope){
	$scope.currentNavItem = 'page1'
});