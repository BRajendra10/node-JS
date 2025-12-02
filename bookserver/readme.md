# 📚 Book Management API

A **RESTful API** to manage books using **Node.js, Express, and MongoDB (Mongoose)**.
Supports **CRUD operations** — Create, Read, Update, and Delete books — with validation and a global error handler.

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
├─ app.js                 # Express app setup
├─ server.js              # Entry point, dotenv config, MongoDB connection
├─ db/db.js               # MongoDB connection
├─ routes/book.route.js   # Book routes
├─ controllers/book.controller.js # Book CRUD logic
├─ models/book.model.js   # Book schema
└─ middleware/errorHandler.js     # Global error handler
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

3. Add a `.env` file in the root directory with the required environment variables:

```
PORT=5000
DB_NAME=Hello
MONGODB_URI=<your-mongodb-uri>
CORS_ORIGIN=*
```

> Replace `<your-mongodb-uri>` with your MongoDB connection string.

---

## 🚀 Running the Project

```bash
npm run dev
```

The server will run on the port defined in `.env` (default `5000`).
Ensure MongoDB is running locally or your Atlas cluster is accessible.

---

## 📝 API Endpoints

**Base URL:** `/api/v1/books`

* **GET /** – Fetch all books
* **POST /create** – Add a new book
* **PATCH /update/:bookId** – Update an existing book
* **DELETE /delete/:bookId** – Delete a book

---

## 💡 Notes

* The API uses a **global error handler** to return consistent error responses.
* Basic validation ensures all required fields are provided for CRUD operations.
* CORS is configured to allow requests from the origin defined in the `.env` file.

---

## 👨‍💻 Author

**Rajendra Behera** – [GitHub](https://github.com/BRajendra10) | [LinkedIn](https://www.linkedin.com/in/behera-rajendra/)
