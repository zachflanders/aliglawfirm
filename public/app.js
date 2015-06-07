angular.module('aligApp',[ 'ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/home.html',
      controller  : 'mainController'


		});


	$locationProvider.html5Mode(true);

})
.controller('mainController', function(){
  var vm = this;
  vm.message = 'Everyone come and see how good I look!';
});
