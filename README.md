# 🧠 Node.js Contacts API Project

## 📋 Description

This project is a backend application built with **Node.js**, **Express**, and **MongoDB**.  
It provides a REST API for managing a collection of contacts, including user authentication, image uploading, and API
documentation via **Swagger**.

---

## 🚀 Features

- CRUD operations for contacts
- User registration and authentication (JWT)
- Avatar upload with image processing (Multer + Jimp)
- Email verification (Nodemailer)
- Swagger documentation
- MongoDB with Mongoose ODM

---

## 🛠️ Technologies Used

- **Node.js**
- **Express**
- **MongoDB & Mongoose**
- **Multer**, **Jimp**
- **JWT (jsonwebtoken)**
- **Nodemailer**
- **Swagger UI Express**
- **ESLint**, **Prettier**

---

## 🧩 API Endpoints (Examples)

```
POST   /api/users/register      → Register a new user
POST   /api/users/login         → Login user
GET    /api/contacts            → Get all contacts
POST   /api/contacts            → Create new contact
DELETE /api/contacts/:id        → Delete contact
PATCH  /api/users/avatars       → Upload user avatar
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/denis-mahei/nodejs-hw-mongodb.git
```

### 2️⃣ Install dependencies:

```bash
npm install
```

### 3️⃣ Create a `.env` file with:

```bash
# --- App Config --- #
PORT=3000

# --- MongoDB Config --- #
MONGODB_USER=yourUser
MONGODB_PASSWORD=yourPassword
MONGODB_URL=cluster0.abcde.mongodb.net
MONGODB_DB=contactsdb

# --- SMTP Config (Brevo example) --- #
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASSWORD=your_smtp_key
SMTP_FROM="Your Name <your_email@domain.com>"

JWT_SECRET=your_jwt_secret_key

# --- Cloudinary Config --- #
CLOUD_NAME=your_cloudname
API_KEY=your_api_key
API_SECRET=your_api_secret

ENABLE_CLOUDINARY=boolean

# ---Google OAuth Config --- #
GOOGLE_AUTH_CLIENT_ID=your_client_id
GOOGLE_AUTH_CLIENT_SECRET=your_client_secret
```

### 4️⃣ Start the server:

```bash
npm run start
```

## 📘 API Documentation

You can explore the full API documentation here:  
👉 [Swagger Docs](https://contacts-manager-kua7.onrender.com/api-docs/)

---

## 🧑‍💻 Author

**Denis Mahei** — [GitHub Profile](https://github.com/denis-mahei)

---
