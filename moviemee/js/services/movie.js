'use strict';

app.factory('Movie', function(FURL, $firebaseArray){
	var ref = new Firebase(FURL);
	var movies = $firebaseArray(ref.child('movies').orderByKey());

	var Movies = {

		register: function(movie) {
			var newMovie = {
				name: movie.name,
				genre: movie.genre,
				year: movie.year,
				image: movie.image
			};

			return movies.$add(newMovie);
		},

		getAllMovies: function() {
			return movies;
		}
	}

	return Movies;
});