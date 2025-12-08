const API_BASE = "http://localhost:5000/api/v1/movies";

export const getMovies = async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE}?${query}`);
    return res.json();
};

export const getMovie = async (id) => {
    const res = await fetch(`${API_BASE}/movie/${id}`);
    return res.json();
};

export const addMovie = async (formData) => {
    const res = await fetch(`${API_BASE}/add`, {
        method: "POST",
        body: formData,
    });
    return res.json();
};

export const updateMovie = async (id, formData) => {
    const res = await fetch(`${API_BASE}/movie/${id}`, {
        method: "PATCH",
        body: formData,
    });
    return res.json();
};

export const deleteMovie = async (id) => {
    const res = await fetch(`${API_BASE}/delete_movie/${id}`, {
        method: "DELETE",
    });
    return res.json();
};