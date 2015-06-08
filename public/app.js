angular.module('aligApp',[ 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/home.html',
      controller  : 'mainController'


		})
		.when('/about', {
			templateUrl : 'views/about.html',
      controller  : 'mainController'


		})
		.when('/faq', {
			templateUrl : 'views/faq.html',
      controller  : 'mainController'


		})
		.when('/contact', {
			templateUrl : 'views/contact.html',
      controller  : 'mainController'


		})
		.when('/downloads', {
			templateUrl : 'views/downloads.html',
      controller  : 'mainController'


		});


	$locationProvider.html5Mode(true);

})
.controller('mainController', function(){
  var vm = this;
  vm.message = 'Everyone come and see how good I look!';
});
