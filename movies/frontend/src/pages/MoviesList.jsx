import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../api/moviesApi";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await getMovies();
      const data = res?.data ?? [];

      setMovies(data);
      setFiltered(data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Filter + Sort logic
  useEffect(() => {
    let updated = [...movies];

    // SEARCH
    if (search.trim()) {
      updated = updated.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // SORT
    if (sort === "latest") updated.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (sort === "oldest") updated.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sort === "rating") updated.sort((a, b) => b.rating - a.rating);

    setFiltered(updated);
  }, [search, sort, movies]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this movie?");
    if (!confirmDelete) return;

    await deleteMovie(id);
    fetchMovies();
  };

  if (loading) return <Loader />;

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Movies</h1>

        <Link to="/add" className="px-4 py-2 bg-blue-600 text-white rounded">
          Add Movie
        </Link>
      </div>

      {/* SEARCH + SORT BAR */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border rounded"
        />

        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="rating">Top Rating</option>
        </select>
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-lg mt-10 text-center">
          No movies found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((m) => (
            <MovieCard key={m._id} movie={m} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
