import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MoviesList from "./pages/MoviesList";
import AddMovie from "./pages/AddMovies.jsx";
import EditMovie from "./pages/EditMovies.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home → Movies List */}
        <Route path="/" element={<MoviesList />} />

        {/* Add Movie */}
        <Route path="/add" element={<AddMovie />} />

        {/* Movie Details Page */}
        <Route path="/movie/:movieId" element={<MovieDetails />} />

        {/* Edit Movie Page */}
        <Route path="/movie/:movieId/edit" element={<EditMovie />} />
      </Routes>
    </BrowserRouter>
  );
}
