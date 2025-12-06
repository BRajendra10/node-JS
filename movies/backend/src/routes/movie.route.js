import { Router } from 'express';
import { upload } from "../middleware/multer.middleware.js";
import { deleteMovie, getMovies, getMovieById, postMovie, updateMovie } from '../controllers/movie.controller.js';

const router = Router();

router.route("/add").post(upload.single("poster"), postMovie)
router.route("/").get(getMovies)
router.route("/movie/:movieId").get(getMovieById)
router.route("/movie/:movieId").patch(upload.single("poster"), updateMovie)
router.route("/delete_movie/:movieId").delete(deleteMovie)

export default router;