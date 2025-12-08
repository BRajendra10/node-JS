import { useState, useEffect } from "react";
import { getMovie, updateMovie } from "../api/moviesApi";
import { useNavigate, useParams } from "react-router-dom";


export default function EditMovie() {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [preview, setPreview] = useState(null);


    useEffect(() => {
        (async () => {
            const data = await getMovie(movieId);
            setMovie(data.data);
        })();
    }, [movieId]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        await updateMovie(movieId, form);
        navigate("/");
    };


    if (!movie) return <div className="p-6">Loading...</div>;


    return (
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Edit Movie</h1>


            <input
                type="text"
                name="title"
                defaultValue={movie.title}
                className="w-full p-2 border rounded"
            />


            <textarea
                name="description"
                defaultValue={movie.description}
                className="w-full p-2 border rounded"
            />


            <input
                type="text"
                name="genre"
                defaultValue={movie.genre}
                className="w-full p-2 border rounded"
            />


            <input
                type="file"
                name="poster"
                onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
            />


            <img
                src={preview || movie.poster.url}
                className="w-48 h-48 object-cover rounded border"
            />


            <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Update Movie
            </button>
        </form>
    );
}