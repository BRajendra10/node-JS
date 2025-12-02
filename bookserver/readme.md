# 📚 Book Management API

A **RESTful API** to manage books using **Node.js, Express, and MongoDB (Mongoose)**.
Supports **CRUD operations** with proper validation and a global error handler.

---

## 🛠️ Technologies

* **Node.js** – Backend runtime environment
* **Express.js** – Web framework
* **MongoDB** – Database
* **Mongoose** – ODM for MongoDB
* **dotenv** – Environment variable management
* **CORS** – Cross-origin resource sharing

---

## 📂 Project Structure

```
src/
├─ app.js                        # Express app setup
├─ server.js                     # Entry point, dotenv config, MongoDB connection
├─ db/db.js                      # MongoDB connection
├─ routes/book.route.js          # Book routes
├─ controllers/book.controller.js# Book CRUD logic
├─ models/book.model.js          # Book schema
└─ middleware/errorHandler.js    # Global error handler
```

---

## ⚙️ Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <repo-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Add a `.env` file in the root directory:

```
PORT=5000
DB_NAME=Hello
MONGODB_URI=<your-mongodb-uri>
CORS_ORIGIN=*
```

> Replace `<your-mongodb-uri>` with your actual MongoDB connection string.

---

## 🚀 Running the Project

```bash
npm run dev
```

The server runs on the port defined in `.env` (default: `5000`).
Make sure your MongoDB instance or Atlas cluster is accessible.

---

## 📝 API Endpoints

**Base URL:** `/api/v1/books`

* **GET /** – Fetch all books
* **POST /create** – Add a new book
* **PATCH /update/:bookId** – Update book details
* **DELETE /delete/:bookId** – Delete a book

---

## 📩 Postman Request Demo

You can view and test the API using the Postman request collection shared below:

👉 **Postman Demo Link:** *[link](https://drive.google.com/file/d/1FT6ntIz3hMQoAAuSvXoxIv6NQlUAfW6f/view?usp=sharing)*

This helps others quickly understand how each API route works.

---

## 💡 Notes

* A global error handler ensures consistent responses across the API.
* Input validation ensures required fields are provided.
* CORS is configured using the origin defined in `.env`.

---

## 👨‍💻 Author

**Rajendra Behera**
[GitHub](https://github.com/BRajendra10) • [LinkedIn](https://www.linkedin.com/in/behera-rajendra/)

