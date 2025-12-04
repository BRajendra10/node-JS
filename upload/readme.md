# 📚 Student Management API (CRUD + Image Upload)

A **Node.js + Express + MongoDB** backend that supports **complete CRUD operations** for students along with **profile image upload** using **Multer**.

This project follows a **clean MVC architecture** with proper routing, controllers, middleware, and database separation.

---

## 🚀 Features

### 🧑‍🎓 Student CRUD

* Create a new student
* Fetch all students
* Fetch a single student
* Update student details (image optional)
* Delete a student

### 🖼️ Image Upload

* Uses **Multer** to store images in `public/`
* Profile image stored on disk
* Image path saved in MongoDB

### 🏗️ Architecture

* MVC Pattern
* Proper folder separation
* Reusable middleware
* Error handling

---

## 📂 Folder Structure

```
src
│── app.js
│── server.js
│── db/
│     └── db.js
│── models/
│     └── student.model.js
│── controllers/
│     └── student.controller.js
│── routes/
│     └── student.routes.js
│── middleware/
│     └── multer.middleware.js
│── public/
│     └── (uploaded images)
```

---

## 🛠️ Tech Stack

| Technology             | Purpose                |
| ---------------------- | ---------------------- |
| **Node.js**            | Backend runtime        |
| **Express.js**         | Server framework       |
| **MongoDB + Mongoose** | Database & ORM         |
| **Multer**             | File upload middleware |
| **Cors**               | Enable API access      |
| **Dotenv**             | Environment variables  |

---

## ⚙️ Environment Variables

Create a `.env` file:

```
PORT=8000
MONGODB_URL=mongodb://localhost:27017/yourdbname
CORS_ORIGIN=*
```

---

## 📦 Installation & Setup

### 1️⃣ Clone repo

```bash
git clone https://github.com/BRajendra10/node-JS
cd upload
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
npm run dev
```

Server starts at:

```
http://localhost:8000
```

---

## 🔗 API Endpoints

### ➕ Create Student (with image)

**POST** `/api/v1/students/add`

Form-data:

```
name: string
email: string
age: string
phone: number
profileImage: file
```

---

### 📥 Get All Students

**GET** `/api/v1/students/all`

---

### 📥 Get Single Student

**GET** `/api/v1/students/:studentId`

---

### ✏️ Update Student

**PUT** `/api/v1/students/update/:studentId`

Form-data (image optional):

```
name, age, email, phone, profileImage?
```

---

### ❌ Delete Student

**DELETE** `/api/v1/students/delete/:studentId`

---

## 📩 Postman Request Demo

You can view and test the API using the Postman request collection shared below:

👉 **Postman Demo Link:** *[link](https://drive.google.com/file/d/1DiLaPJo3RfBNXiausL_ziC9G10hRBLZn/view?usp=sharing)*

---

## 🧪 Testing

You can test endpoints using:

* Postman
* Thunder Client
* cURL

---

## 🧑‍💻 Project Author

**Rajendra Behera**
Front-end & Back-end Developer
(Your GitHub & LinkedIn can be added too)

