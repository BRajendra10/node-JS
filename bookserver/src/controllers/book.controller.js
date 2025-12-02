import mongoose, { isValidObjectId } from "mongoose";
import { Book } from "../models/book.model.js";

const getAllBooks = async (req, res) => {
    const books = await Book.find();

    if (books.length === 0) {
        throw Error("No Book found")
    }

    return res.status(200).json({
        status: 200,
        message: "All books fetched successfuly",
        books: books
    })
}

const addBook = async (req, res) => {
    const { title, description, category, author, price } = req.body;

    if ([title, description, category, author].some(field => !field || field.trim() === "")) {
        throw Error("All fields are required");
    }

    const newBook = await Book.create({
        title,
        description,
        category,
        author,
        price
    });

    if (!newBook) {
        throw Error("Something went wrong while creating new book");
    }

    return res.status(201).json({
        status: 201,
        message: "New book added successfully",
        book: newBook
    });
};

const updateBook = async (req, res) => {
    const { bookId } = req.params;
    const { title, description, category } = req.body;

    if (!bookId || !isValidObjectId(bookId)) {
        throw Error("Valid book id is required")
    }

    if ([title, description, category].some(field => !field || field.trim() === "")) {
        throw Error("All fields are required");
    }

    const updatedBook = await Book.findByIdAndUpdate(
        new mongoose.Types.ObjectId(bookId),
        {
            $set: {
                title,
                description,
                category
            }
        },
        {
            new: true,
        }
    )

    if (!updatedBook) {
        throw Error("Somethign went wrong while updating book data")
    }

    return res.status(200).json({
        status: 200,
        message: "Book updated successfully",
        book: updatedBook
    })
}

const deleteBook = async (req, res) => {
    const { bookId } = req.params;

    if (!bookId || !isValidObjectId(bookId)) {
        throw Error("Valid book id is required")
    }

    await Book.findByIdAndDelete(bookId);

    return res.status(200).json({
        status: 200,
        message: "Book deleted successfully",
        book: {}
    })
}

export {
    addBook,
    updateBook,
    deleteBook,
    getAllBooks,
}