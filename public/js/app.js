// instatiate (create) the application 
var app = angular.module('wiresApp', ['ngRoute', 'ngDraggable']);


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when ('/', {
			templateUrl: 'partials/landing.html',
			controller: 'MainCtrl'
		})

}])


