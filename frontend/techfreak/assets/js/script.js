//freak app wa testing with bootstrapp navbar
// var oldapp = angular.module('oldapp',['ngRoute']);
// oldapp.controller('mainCtrl',function($scope){
// 	$scope.message = "its Awesome"
// });
// New Controller to Use NG Material for more Interactive Design

var freakapp = angular.module('freakapp',['ngMaterial','ngRoute', 'ngMessages']);

freakapp.config(function($routeProvider, $locationProvider) {
	$routeProvider

	.when('/',{
		templateUrl: "app/components/blog/blog.html",controller : 'AppCtrl'
	})
	.when('/about',{templateUrl:"app/components/page/about.html"})
	.when('/contact',{templateUrl: "app/components/page/contact.html"})
	.when('/register',{templateUrl: "app/components/page/register.html"})
	.when('/login',{templateUrl: "app/components/page/login.js"});
	//use html 5 history api to get rid of # in link
	$locationProvider.html5Mode(true);
});
// freakapp.controller('aboutCtrl',function($scope){
// 	$scope.message = "Look this is About Page";
// });
// freakapp.controller('contactCtrl',function($scope){
// 	$scope.message = "Look Now I am in Contact Page";
// });
freakapp.controller('registerCtrl',function($scope){
	$scope.user = {
      name: '',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
});
// freakapp.controller('loginCtrl',function($scope){
// 	$scope.message = "Look Now I am in Contact Page";
// });


freakapp.controller('AppCtrl', function($scope,$mdSidenav){
	//write your logic here to retrive data for pages
	$scope.currentNavItem = 'page1'
	 $scope.toggleLeft = buildToggler('left');
	 function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }

});
// this contrroller is used for error
freakapp.controller('errorCtrl',function($scope){
	$scope.project = {description : 'Please Enter Name', price: 500};
});