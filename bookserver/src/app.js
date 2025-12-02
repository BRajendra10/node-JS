import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())

// Route imports
import bookRouter from './routes/book.route.js';

app.use("/api/v1/books", bookRouter)

app.use((err, req, res, next) => {
    const status = err.statusCode || 500;

    res.status(status).json({
        success: false,
        message: err.message || "Internal server error",
        error: err.errors || [],
    })
})

export default app