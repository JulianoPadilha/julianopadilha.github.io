'use strict';

app.controller('MovieController', function(Movie, $scope){
	$scope.registerMovie = function(movie) {
		Movie.register(movie).then(function(){
			console.log("Movie successfully registered!");
			location.reload();
		}, function(err) {
			console.log("Error: ", err);
		});
	};

	$scope.movies = Movie.getAllMovies();

})