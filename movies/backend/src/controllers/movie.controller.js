import mongoose, { isValidObjectId } from 'mongoose';
import { Movie } from '../models/movie.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { deleteOnCloudinary, uploadOnCloudinary } from '../utils/Cloudinary.js';

const postMovie = async (req, res) => {
    const { title, description, genre, releaseYear } = req.body;

    if ([title, description, genre].some(field => field?.trim() === "") || !releaseYear) {
        throw new ApiError(400, "All fields are required")
    }

    const posterLocalPath = req.file?.path;

    const moviePoster = await uploadOnCloudinary(posterLocalPath);

    if (!moviePoster) {
        throw new ApiError(400, "Something went wrong while uploading on cloudinary !!")
    }

    const newMovie = await Movie.create({
        title,
        description,
        genre,
        releaseYear,
        poster: {
            id: moviePoster.public_id,
            url: moviePoster.secure_url
        }
    })

    if (!newMovie) {
        throw new ApiError(400, "Somethign went wrong while creating movie data !!")
    }

    return res.status(201).json(
        new ApiResponse(201, newMovie, "Successfully added new movie")
    )

}

const getMovies = async (req, res) => {
    const query = {};

    if (req.query.title) {
        query.title = { $regex: req.query.title, $options: "i" };
    }

    if (req.query.genre) {
        query.genre = { $regex: req.query.genre, $options: "i" };
    }

    if (req.query.year) {
        query.releaseYear = req.query.year;
    }

    const movies = await Movie.find(query).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, movies, "Movies fetched successfully")
    );
};


const getMovieById = async (req, res) => {
    const { movieId } = req.params;

    if (!movieId || !isValidObjectId(movieId)) {
        throw new ApiError(400, "Valid movie id is required !!")
    }

    const movieById = await Movie.findById(movieId);

    if (!movieById) {
        throw new ApiError(400, "Movie with this id doesn't exist any !!")
    }

    return res.status(200).json(
        new ApiResponse(200, movieById, "Movie fetched successfully")
    )
}

const updateMovie = async (req, res) => {
    const { movieId } = req.params;
    const { title, description, genre } = req.body;

    if (!movieId || !isValidObjectId(movieId)) {
        throw new ApiError(400, "Valid movie id is required !!")
    }

    const movieById = await Movie.findById(movieId);

    if (!movieById) {
        throw new ApiError(400, "Movie with this id doesn't exist any !!")
    }

    const deleteResult = await deleteOnCloudinary(movieById.poster.id);

    if (deleteResult.result !== "ok") {
        throw new ApiError(400, "Something went wrong while deleting image from cloudinary !!")
    }

    const posterLocalPath = req.file?.path

    const updateResult = await uploadOnCloudinary(posterLocalPath)

    if (!updateResult) {
        throw new ApiError(400, "Something went wrong while uploading on cloudinary !!")
    }

    const updatedMovie = await Movie.findByIdAndUpdate(
        movieId,
        {
            title,
            description,
            genre,
            poster: {
                id: updateResult.public_id,
                url: updateResult.secure_url
            }
        },
        { new: true }
    )

    return res.status(200).json(
        new ApiResponse(200, updatedMovie, "Movie updated successfully")
    )
}

const deleteMovie = async (req, res) => {
    const { movieId } = req.params;

    if (!movieId || !isValidObjectId(movieId)) {
        throw new ApiError(400, "Valid movie id is required !!")
    }

    const movieById = await Movie.findById(movieId);

    if (!movieById) {
        throw new ApiError(400, "Movie with this id doesn't exist any !!")
    }

    if (movieById.poster?.id) {
        const deleteResult = await deleteOnCloudinary(movieById.poster.id);

        // Only error if cloudinary returns actual deletion error
        if (deleteResult.result !== "ok" && deleteResult.result !== "not found") {
            throw new ApiError(400, "Failed to delete poster from Cloudinary !!");
        }
    }

    await Movie.findByIdAndDelete(movieId)

    return res.status(200).json(
        new ApiResponse(200, {}, "Movie deleted successfully")
    )
}

export {
    postMovie,
    getMovies,
    getMovieById,
    updateMovie,
    deleteMovie,
}