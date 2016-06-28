'use strict';

var app = angular.module('webApp', ['ngRoute', 'firebase']);

app.constant('FURL', 'https://moviemee.firebaseio.com/');

app.config(function($routeProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl: 'views/movies.html',
		controller: 'MovieController'
	})
	.when('/register', {
		templateUrl: 'views/register.html',
		controller: 'MovieController'
	})
	.when('/movies', {
		templateUrl: 'views/movies.html',
		controller: 'MovieController'
	})
	.when('/series', {
		templateUrl: 'views/series.html',
		controller: 'SerieController'
	})
	.otherwise({
		redirectTo: '/'
	});
});