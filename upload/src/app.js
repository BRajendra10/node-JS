import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())

import studentRouter from './routes/student.route.js';

app.use("/api/v1/students", studentRouter)

export default app