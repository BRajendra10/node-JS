import { Router } from "express";
import { addBook, deleteBook, getAllBooks, updateBook } from "../controllers/book.controller.js";

const router = Router();

router.route("/").get(getAllBooks);
router.route("/create").post(addBook);
router.route("/update/:bookId").patch(updateBook);
router.route("/delete/:bookId").delete(deleteBook);

export default router;