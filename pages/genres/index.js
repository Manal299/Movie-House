import { getAllGenres } from "../api/movie";
export default function Genres(props) {
  return (
    <div>
      <h1>Genres</h1>
      <ul>
        {props.products.map(e => (
          <li key={e.id}>
            <a href={`/genres/${e.id}`}>{e.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  //running server-side code & using the FileSystem module of Node server
  const data = await getAllGenres()
  console.log("re-rendering it")
  return {
    props: {
      products: data
    },
    //Incremental Static Regeneration
    revalidate: 60
  }
}