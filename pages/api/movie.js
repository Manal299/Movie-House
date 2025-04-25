import moviesData from '../../data/movies.json';

export function getAllMovies() {
    const movies = moviesData.movies;
  
    // Sort movies by rating in descending order
    movies.sort((a, b) => b.releasedYear - a.releasedYear);
    
    return movies;
}
export function getTrendingMovies() {
    const movies = moviesData.movies;
  
    // Sort movies by rating in descending order
    movies.sort((a, b) => b.rating - a.rating);
    
    return movies;
}
export function getfilteredMovies(genreid) {
    const movies = moviesData.movies;
    // Filter movies by genre
    const filteredMovies = movies.filter(movie => movie.genreId.includes(genreid));
    
    return filteredMovies;
}

export function getAllGenres() {
    const genres = moviesData.genres;
    return genres;
}
export function getGenreName(genreid) {
    const genres = moviesData.genres;
    // Find the genre by ID
    const genre = genres.find(genre => genre.id === genreid);
    
    return genre ? genre.name : null;
}

export function getMovieDetails(movieId) {
    const movies = moviesData.movies;
    // Find the movie by ID
    const movie = movies.find(movie => movie.id === movieId);
    const directorid = movie.directorId;
    const directors = moviesData.directors;
    // Find the director by ID
    const director = directors.find(director => director.id === directorid);
    // Add director name to movie object
    if (movie && director) {
        movie.director = director.name;
    }
    // Find the genre by ID
    const genres = moviesData.genres;
    const genre = genres.find(genre => genre.id === movie.genreId);
    // Add genre name to movie object
    if (movie && genre) {
        movie.genre = genre.name;
    }
    return movie ? movie : null;
}   
