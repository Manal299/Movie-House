import { getfilteredMovies } from "@/pages/api/movie";
import MovieCard from "@/components/movieCard";
import { getGenreName } from "@/pages/api/movie";

export default function Genre(props){
    return(
        <div>
            <h1>{props.genreName}</h1>
            <ul>
                {props.products.map(e=>(
                    <li key={e.id}>
                        <MovieCard title={e.title} year={e.releaseYear} rating={e.rating} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export async function getServerSideProps(context) {
    const { params } = context;
    const genreId = context.params.id;
    const movies = await getfilteredMovies(genreId);
    const genreName = getGenreName(genreId);

    return {
    props: {
        products: movies,
        genreName: genreName
    }
}
}