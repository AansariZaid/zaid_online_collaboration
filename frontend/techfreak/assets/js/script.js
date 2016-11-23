//freak app wa testing with bootstrapp navbar
var freakapp = angular.module('freakapp',['ngRoute']);
freakapp.controller('mainCtrl',function($scope){
	$scope.message = "its Awesome"
});

// New Controller to Use NG Material for more Interactive Design

var newapp = angular.module('newapp',['ngMaterial','ngRoute', 'ngMessages']);

newapp.config(function($routeProvider, $locationProvider) {
	$routeProvider

	.when('/',{
		templateUrl: "app/components/page/home.html",controller : 'AppCtrl'
	})
	.when('/about',{templateUrl:"app/components/page/about.html",controller : 'aboutCtrl'})
	.when('/contact',{templateUrl: "app/components/page/contact.html",controller : 'contactCtrl'})
	.when('/register',{templateUrl: "app/components/page/register.html", controller : 'registerCtrl'})
	.when('/login',{templateUrl: "app/components/page/login.js",controller : 'loginCtrl'});
	//use html 5 history api to get rid of # in link
	$locationProvider.html5Mode(true);


});
newapp.controller('aboutCtrl',function($scope){
	$scope.message = "Look this is About Page";
});
newapp.controller('contactCtrl',function($scope){
	$scope.message = "Look Now I am in Contact Page";
});
newapp.controller('registerCtrl',function($scope){
	$scope.user = {
      name: '',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
});
newapp.controller('loginCtrl',function($scope){
	$scope.message = "Look Now I am in Contact Page";
});

newapp.controller('AppCtrl', function($scope){
	//write your logic here to retrive data for pages
	$scope.currentNavItem = 'page1'
});
// this contrroller is used for error
newapp.controller('errorCtrl',function($scope){
	$scope.project = {description : 'Please Enter Name', price: 500};
});