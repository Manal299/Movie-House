import moviesData from '../../data/movies.json';

export function getAllMovies() {
  return moviesData.movies;
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
