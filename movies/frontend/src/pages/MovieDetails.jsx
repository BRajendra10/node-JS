import { useEffect, useState } from "react";
import { deleteMovie, getMovie } from "../api/moviesApi";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function MovieDetails() {
    const { movieId } = useParams();

    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        (async () => {
            const data = await getMovie(movieId);
            setMovie(data.data);
        })();
    }, [movieId]);


    const handleDelete = async () => {
        await deleteMovie(movieId);
        navigate("/");
    };


    if (!movie) return <div className="p-6">Loading...</div>;


    return (
        <div className="p-6 space-y-4">
            <img
                src={movie.poster.url}
                className="w-64 h-64 object-cover rounded border"
            />


            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="opacity-80">{movie.description}</p>
            <p className="font-semibold">Genre: {movie.genre}</p>
            <p className="font-semibold">Release Year: {movie.releaseYear}</p>


            <div className="flex gap-3 mt-4">
                <Link
                    to={`/edit/${movie._id}`}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    Edit
                </Link>


                <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}