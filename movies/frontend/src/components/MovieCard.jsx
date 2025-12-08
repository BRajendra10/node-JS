import { Link } from "react-router-dom";


export default function MovieCard({ movie, onDelete }) {

    return (
        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
            <img
                src={movie.poster.url}
                className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-3 text-lg font-bold">{movie.title}</h2>
            <p className="text-sm opacity-70">{movie.genre}</p>


            <div className="flex gap-3 mt-3">
                <Link
                    to={`/movie/${movie._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                    View
                </Link>

                <Link 
                    to={`/movie/${movie._id}/edit`} 
                    className="px-3 py-1 bg-green-500 text-white rounded"
                >
                    Edit
                </Link>

                <button
                    onClick={() => onDelete(movie._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}