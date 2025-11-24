# 🐦 Mini Twitter — Full Stack CRUD App

A simple **Full Stack Twitter Clone** built with **React + Tailwind CSS** on the frontend and **Node.js + Express** on the backend.
This project supports **Create, Read, Update, Delete (CRUD)** operations for tweets with clean UI and modular backend.

---

## 🚀 Features

### ✅ Backend (Node.js + Express)

* RESTful API built with Express
* Endpoints for:

  * **Get all tweets**
  * **Create tweet**
  * **Edit a tweet**
  * **Delete a tweet**
* Generates **unique tweet IDs** using `uuid`
* Middleware for logging each request
* CORS + JSON body parsing enabled

---

### 🎨 Frontend (React + Tailwind CSS)

* Clean, modern Twitter-style layout
* Components:

  * **Sidebar**
  * **Feeds**
  * **RightContainer (Trends + Search)**
* Tweet features:

  * Create tweet
  * Edit tweet
  * Delete tweet
  * Realtime UI updates
* Beautiful UI with Tailwind
* Uses icons from `lucide-react`

---

## 🎥 Demo Video

[Warch demo here](https://drive.google.com/file/d/1XxkeDXhUEQxXQNKfNbWuR1Wvd6bUwkc-/view?usp=sharing)

---

## 📁 Project Structure

```
/backend
   ├── index.js
   ├── tweet.js
   └── package.json

/frontend
   ├── src/
   │    ├── components/
   │    │      ├── Sidebar.jsx
   │    │      ├── RightContainer.jsx
   │    │      └── Feeds.jsx
   │    ├── App.jsx
   │    └── index.js
   └── package.json
```

---

## 🛠️ Tech Stack

### **Frontend**

* React
* Tailwind CSS
* Lucide Icons

### **Backend**

* Node.js
* Express
* UUID
* CORS

---

## 📡 API Endpoints

### **GET — All Tweets**

`GET /api/v1/tweets`

### **POST — Create a Tweet**

`POST /api/v1/tweets`
Body:

```json
{
  "username": "john",
  "tweet": "Hello world!"
}
```

### **PATCH — Update Tweet**

`PATCH /api/v1/tweet/:tweetId`
Body:

```json
{
  "tweet": "Updated tweet"
}
```

### **DELETE — Remove a Tweet**

`DELETE /api/v1/tweet/:tweetId`

---

## 🖼️ Screenshots (Optional to Add)

---

## 📌 Future Improvements

* Add user authentication
* Add likes & retweets
* Add image upload support
* Add pagination or infinite scroll
