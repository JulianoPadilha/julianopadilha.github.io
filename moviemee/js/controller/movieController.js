'use strict';

app.controller('MovieController', function(Movie, $scope, $http){
	$scope.registerMovie = function(movie) {
		Movie.register(movie).then(function(){
			console.log("Movie successfully registered!");
			location.reload();
		}, function(err) {
			console.log("Error: ", err);
		});
	};

	$http.get("https://api.themoviedb.org/3/movie/600?api_key=645889e8996dedd381f28bb9d0767639")
   		.success(function(data) {
			   $scope.movie = data;
		});

	$scope.movies = Movie.getAllMovies();

})