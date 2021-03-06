var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider,$locationProvider){

	$locationProvider.html5Mode(true);
	// $urlRouterProvider.otherwise("/home/");
	$stateProvider
	.state('home',{
		url: "/home",
/*      	
*/      views: {
			"header" :{templateUrl: "templates/header.html"},
			"app":{
						templateUrl: "templates/home.html",
						controller: 'HomeCtrl'
		      	}
			}
			
	})
	.state('about',{
		url: "/about",
		views: {
			"header" :{templateUrl: "templates/header.html"},
			"app":{
						templateUrl: "templates/about.html",
						controller: 'AboutCtrl'
		      	}
			}
	})
	.state('work',{
		url: "/",
		views: {
		"header" :{templateUrl: "templates/header.html"},
		"app":{
					templateUrl: "templates/work.html",
					controller: "WorkCtrl"
	      	}
		}

	})

	.state('product',{
		url: "/",
		views: {
			"header" :{templateUrl: "templates/header.html"},
			"app":{
						templateUrl: "templates/product.html",
		      	}
			}
	});
});