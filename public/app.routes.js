angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/home.html',
      controller  : 'homeController',
      controllerAs: 'home'

		})
    .when('/about', {
			templateUrl : 'views/about.html',
      controller  : 'mainController',
      controllerAs: 'main'

		});



	$locationProvider.html5Mode(true);

});
