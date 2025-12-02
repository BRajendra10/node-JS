import { Router } from "express";
import { addBook, deleteBook, filterBooksByCategory, getAllBooks, updateBook } from "../controllers/book.controller.js";

const router = Router();

router.route("/").get(getAllBooks);
router.route("/create").post(addBook);
router.route("/update/:bookId").patch(updateBook);
router.route("/delete/:bookId").delete(deleteBook);

router.route("/filter").get(filterBooksByCategory);

export default router;