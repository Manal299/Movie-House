import useSWR from 'swr';
export default function DirectorDetails(props) {
    
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(`/api/director/${props.directorId}`, fetcher);
  return (
    <div>
      <h1>{props.director.name}</h1>
      <p>Biography: {props.director.biography}</p>
      <p>Birth Year: {props.director.birthYear}</p>
      <p>   Movies Directed:</p>
    </div>
    ); 
}
