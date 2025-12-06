import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './middleware/ErrorHandler.middleware.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.static("public"))

// Route imports
import movieRouter from './routes/movie.route.js';

app.use("/api/v1/movies", movieRouter);

app.use(globalErrorHandler)

export { app }