# Email Verification & JWT Authentication API

A secure authentication system built with **Node.js**, **Express**, **MongoDB**, and **JWT**, featuring **email verification**, **access & refresh tokens**, with **cookie-based authentication**. This project allows users to sign up, verify their email, and access protected routes.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)  
- [User Authentication Flow](#user-authentication-flow)  
- [Usage](#usage)  
- [License](#license)  

---

## Features

- User **signup** with email verification  
- **Email verification** using temporary codes  
- **Access and Refresh JWT tokens** for secure authentication  
- **Cookie-based token storage** for secure session management  
- **Protected routes** accessible only to verified users  
- Passwords **hashed** using bcrypt  

---

## Tech Stack

- **Node.js** - JavaScript runtime  
- **Express.js** - Web framework for Node.js  
- **MongoDB** - NoSQL database  
- **Mongoose** - MongoDB ODM  
- **JWT** - JSON Web Tokens for authentication  
- **Nodemailer** - Sending verification emails  
- **Bcrypt** - Password hashing  
- **Cors** - Handling cross-origin requests  
- **Cookie-Parser** - Handling cookies  

---

## Installation

1. Clone the repository:

```bash
git https://github.com/BRajendra10/node-JS
cd login
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and configure the following variables:

```env
PORT=8000
MONGODB_URI=<Your MongoDB URI>
DB_NAME=<Your Database Name>
EMAIL_USER=<Your Gmail Email>
EMAIL_PASS=<Your Gmail Password>
ACCESS_TOKEN_SECRET=<Your Access Token Secret>
REFRESH_TOKEN_SECRET=<Your Refresh Token Secret>
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=15d
CORS_ORIGIN=<Your Frontend URL>
```

4. Start the server:

```bash
npm run dev
```

Server will run at `http://localhost:8000`.

---

## API Endpoints

### Public Routes

* **GET /**
  Test server connection.
  **Response:**

  ```json
  {
    "success": true,
    "message": "Server is running fine"
  }
  ```

* **POST /signup**
  Register a new user and send a verification email.
  **Request Body:**

  ```json
  {
    "username": "john",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```

* **POST /verify-email**
  Verify user email using the code sent to their email.
  **Request Body:**

  ```json
  {
    "email": "john@example.com",
    "code": "123456"
  }
  ```

  **Response:** Sets `accessToken` and `refreshToken` cookies.

---

### Protected Routes

* **GET /home**
  Accessible only by authenticated users with a valid access token.
  **Response:**

  ```json
  {
    "success": true,
    "message": "Welcome to our home page."
  }
  ```

---

## User Authentication Flow

1. **Signup:** User registers with email & password → Server generates a 6-digit verification code → Sends email → Saves hashed code and expiry.
2. **Email Verification:** User submits code → Server verifies → Marks email as verified → Generates JWT access & refresh tokens → Stores tokens in cookies.
3. **Access Protected Routes:** User can access protected endpoints using the `accessToken`.
4. **Token Expiry:** When the access token expires, the refresh token can be used to issue a new access token.

---

## Folder Structure

```
├── db/
│   └── db.js              # MongoDB connection
├── user.model.js           # User schema & methods
├── auth.middleware.js      # JWT verification middleware
├── server.js               # Express app
├── index.js                # App entry point
├── package.json
└── README.md
```

---

## Notes

* Passwords are **hashed** with bcrypt before saving to the database.
* Email verification codes expire in **10 minutes**.
* JWT tokens are stored securely in **HTTP-only cookies**.
* CORS is configured to allow requests from your frontend.

---
