import { getMovieDetails } from "@/pages/api/movie";
import { getAllMovies } from "@/pages/api/movie";
import Link from "next/link";
export default function MovieDetails(props) {
  return (
    <div>
      <h1>{props.movie.title}</h1>
      <p>Description: {props.movie.description}</p>
      <Link href={`/movies/${props.movie.movieId}/${props.movie.directorId}`}>
      <p>Director: {props.movie.director}</p>
      </Link>
      <p>Year: {props.movie.releaseYear}</p>
      <p>Rating: {props.movie.rating}</p>
      <p>Genre: {props.movie.genre}</p>
    </div>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const movieId = params.id;
  const movie = await getMovieDetails(movieId);
  return {
    props: {
      movie: movie,
    },
  };
}
export async function getStaticPaths() {
  const movies = await getAllMovies();
  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
  return { paths, fallback: false };
}