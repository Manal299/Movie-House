import { getTrendingMovies } from "./api/movie";
import MovieCard from "@/components/movieCard";
import { useRouter } from 'next/router'; 
export default function Home(props) {
  const router = useRouter();
  return (
      <div>
        <h1>Home Page</h1>
        <ul>
        {props.products.map(e => (
          <MovieCard key={e.id} title={e.title} year={e.releaseYear} rating={e.rating} />
        ))}
      </ul>
      <button onClick={() => router.push('/genres')}>Browse Genres</button>
      </div>
    
  );
}

export async function getStaticProps(){
  //running server-side code & using the FileSystem module of Node server
  const data = await getTrendingMovies()
  console.log("re-rendering it")
  return{
    props:{
        products:data
    },
    //Incremental Static Regeneration
    revalidate:60
  }
}