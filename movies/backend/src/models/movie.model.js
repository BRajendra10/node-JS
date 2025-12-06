import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        releaseYear: {
            type: String,
            required: true,
        },
        poster: {
            id: { type: String, required: true },
            url: { type: String, required: true }
        }
    },
    { timeStamps: true }
)

export const Movie = mongoose.model("Movie", movieSchema);