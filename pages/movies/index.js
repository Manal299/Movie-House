import { getAllMovies } from "../api/movie";
import MovieCard from "@/components/movieCard";

export default function Movies(props) {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {props.products.map(e => (
          <li key={e.id}>
           <MovieCard title={e.title} year={e.releaseYear} rating={e.rating} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  //running server-side code & using the FileSystem module of Node server
  const data = await getAllMovies()
  console.log("re-rendering it")
  return {
    props: {
      products: data
    },
    //Incremental Static Regeneration
    revalidate: 60
  }
}