import { useState } from "react";
import { addMovie } from "../api/moviesApi";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const [posterPreview, setPosterPreview] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    await addMovie(form);
    navigate("/");
  };

  return (
    <form className="p-6 space-y-4" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Add New Movie</h1>

      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border rounded"
        rows={4}
        required
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="releaseYear"
        placeholder="Release Year"
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="file"
        name="poster"
        accept="image/*"
        className="w-full"
        onChange={(e) =>
          setPosterPreview(URL.createObjectURL(e.target.files[0]))
        }
        required
      />

      {posterPreview && (
        <img
          src={posterPreview}
          className="w-48 h-48 object-cover rounded border"
        />
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Movie
      </button>
    </form>
  );
}
