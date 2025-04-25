export default function MovieCard(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      <p className="text-gray-600">Year: {props.year}</p>
      <p className="text-yellow-500 font-semibold">Rating: {props.rating}</p>
    </div>
  );
}
