# Node.js

This repository contains my Node.js learning and practice code, covering backend fundamentals, APIs, CORS, proxies, and real-world backend concepts.

---

# 🚀 Understanding CORS & Proxy in Web Development (Simple Explanation)

When your frontend communicates with your backend, two concepts decide how that communication works:

* **CORS**
* **Proxy**

This guide explains both in the simplest possible way.

---

## 🔒 What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a **browser security rule**.

Whenever your frontend calls a backend API, the browser asks:

> “Is this frontend allowed to talk to this backend?”

The backend must send correct CORS headers.
If the browser doesn’t see them → **it blocks the response**.

### Important Points

* The **backend does NOT block you**
* The **browser blocks the response**
* Tools like **Postman, mobile apps, backend servers** do NOT face CORS

---

## ✅ Example: CORS in Node.js (Express)

```js
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.get("/api/test", (req, res) => {
  res.json({ message: "CORS working!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

## 🛡️ What is a Proxy?

A **proxy** is a middle layer between the frontend and backend.

Instead of frontend calling backend directly:

```
Frontend → Proxy → Backend
```

### Why Proxies Are Used

* To bypass **CORS** (during development)
* To hide real backend URL
* To simplify API calls
* To make requests appear as **same-origin**

Because the browser thinks everything is coming from the same server →
**CORS does not trigger**.

---

## 🧩 Example: Proxy in Vite (Frontend)

**vite.config.js**

```js
export default {
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      }
    }
  }
};
```

Frontend calls:

```js
fetch("/api/test");
```

The proxy forwards it to:

```
http://localhost:5000/api/test
```

No CORS issues.

---

## 🧭 Forward Proxy (Simple Explanation)

```
Client → Proxy → Server
```

A forward proxy **represents the client**.

Used by:

* Vite dev server
* CRA dev server
* Next.js dev server

### Characteristics

* Helps bypass **CORS** during development
* Hides the **client** from the server

---

## 🔀 Reverse Proxy (Simple Explanation)

```
Client → Reverse Proxy → Backend Servers
```

A reverse proxy **represents the server**.

Used in:

* Nginx
* Apache
* Cloudflare
* API Gateways

### What a Reverse Proxy Does

* Hides backend servers
* Manages routing to multiple services
* Handles load balancing
* Manages SSL certificates

### Important Note

A reverse proxy **does NOT bypass CORS**.
It only bypasses CORS if:

* Frontend and backend appear under the **same origin**

(Example: both served through Nginx)

---

## 🧠 CORS vs Proxy (1-Line Summary)

* **CORS:** The browser checking — *“Is this frontend allowed?”*
* **Proxy:** Makes the browser think — *“Everything comes from the same origin.”*

---

## 🎯 Key Takeaways

* CORS is **browser-level security**
* Only the **browser** blocks CORS
* Development proxies help you avoid CORS errors
* Reverse proxies run in production (Nginx, Cloudflare)
* CORS and proxy solve different problems


