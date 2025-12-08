# 🎬 Movies Management API

A full-stack ready **Movies Management REST API** built using **Node.js, Express, MongoDB, Cloudinary, and Multer**. This backend supports CRUD operations for movies, including **image upload**, **Cloudinary integration**, **error handling**, and **advanced query filtering**.

---

## 🚀 Features

* Add new movies with poster upload
* Update movies with Cloudinary poster replacement
* Delete movies from DB + Cloudinary
* Get all movies with filters:

  * Search by **title**
  * Filter by **genre**
  * Filter by **release year**
* Get movie by ID
* Global error handling with custom `ApiError`
* Clean success responses using `ApiResponse`
* Cloudinary image upload & deletion
* Multer storage for temporary file upload

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **Cloudinary (Image Uploads)**
* **Multer (File Upload Middleware)**
* **CORS**
* **dotenv**

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
 git clone https://github.com/your-repo/movies-api.git
 cd movies-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
PORT=8000
MONGODB_URI=mongodb+srv://...
DB_NAME=moviesDB
CLOUDINARY_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
CORS_ORIGIN=http://localhost:5173
```

### 4️⃣ Run the server

```bash
npm run dev
```

Server starts at:

```
http://localhost:8000
```

---

## 🔗 API Routes

### 🎥 **Movies Routes**

| Method | Endpoint                               | Description                        |
| ------ | -------------------------------------- | ---------------------------------- |
| POST   | `/api/v1/movies/add`                   | Add new movie (with poster upload) |
| GET    | `/api/v1/movies`                       | Get all movies (with filters)      |
| GET    | `/api/v1/movies/movie/:movieId`        | Get movie by ID                    |
| PATCH  | `/api/v1/movies/movie/:movieId`        | Update movie (replace poster)      |
| DELETE | `/api/v1/movies/delete_movie/:movieId` | Delete movie                       |

---

## 🧩 Project Structure

```
src/
├── controllers/
│   └── movie.controller.js
├── db/
│   └── index.js
├── middleware/
│   ├── ErrorHandler.middleware.js
│   └── multer.middleware.js
├── models/
│   └── movie.model.js
├── routes/
│   └── movie.route.js
├── utils/
│   ├── ApiError.js
│   ├── ApiResponse.js
│   └── Cloudinary.js
└── app.js
└── index.js
```

---

## 📤 File Upload Flow

1. User uploads image using Multer
2. Multer stores it temporarily in `/public`
3. Upload to Cloudinary
4. Remove local file using `fs.unlinkSync`

---

## ⚙️ Environment Variables Explained

| Variable                | Description                |
| ----------------------- | -------------------------- |
| `PORT`                  | Server running port        |
| `MONGODB_URI`           | MongoDB connection string  |
| `DB_NAME`               | Database name              |
| `CLOUDINARY_NAME`       | Cloud name from Cloudinary |
| `CLOUDINARY_API_KEY`    | Cloudinary API key         |
| `CLOUDINARY_API_SECRET` | Cloudinary secret key      |
| `CORS_ORIGIN`           | Allowed frontend domain    |

---

## 🧪 Example Success Response

```json
{
  "statusCode": 201,
  "data": {
    "title": "Batman Begins",
    "genre": "Action",
    "poster": {
      "url": "https://..."
    }
  },
  "message": "Successfully added new movie",
  "success": true
}
```

---

## ⚠️ Error Handling

Errors are handled using **ApiError**:

```js
throw new ApiError(400, "All fields are required");
```

The global handler converts it into clean JSON.

---

## 📩 Postman Request Demo

You can view and test the API using the Postman request collection shared below:

👉 **Postman Demo Link:** *[link](https://drive.google.com/file/d/1L7SHbFDsXlhE4x2chs4bUjianqgz8Cpt/view?usp=sharing)*

---

## 🗑️ Delete Flow (with Cloudinary)

* Delete old poster from Cloudinary
* Delete movie document from MongoDB

---

## ❤️ Author

**Rajendra Behera** — Full Stack Web Developer

GitHub: [https://github.com/BRajendra10](https://github.com/BRajendra10)