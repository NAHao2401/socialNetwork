# Social Network

A full-stack social networking web application that allows users to create accounts, manage profiles, share posts, interact with other users, and engage through likes and comments.

This project was built as a personal full-stack project to practice modern web development, RESTful API design, authentication, database modeling, and frontend-backend integration.

---

## Introduction

**Social Network** is a mini social networking platform inspired by common social media applications. The application provides core features such as user authentication, post management, likes, comments, profile management, and media upload.

The main purpose of this project is to improve my full-stack development skills, especially in backend development with **Node.js, Express.js, MongoDB, RESTful APIs, authentication, authorization, and frontend integration with React**.

---

## Features

### Authentication & Authorization

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes for authenticated users
- User session handling on the client side

### User Features

- View and update user profile
- Upload user avatar or media files
- View other users' profiles
- Manage personal information

### Post Features

- Create new posts
- View posts
- Edit and delete own posts
- Upload images for posts
- Like and unlike posts
- Comment on posts

### Social Interaction

- Interact with posts through likes and comments
- View user-related content
- Basic social networking flow between users

### Frontend Features

- Responsive user interface
- Client-side routing
- State management with Redux Toolkit
- API integration using Axios
- Loading and error handling

---

## Tech Stack

### Frontend

- ReactJS
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- Tailwind CSS
- React Icons
- React Spinners
- React Photo View

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- Passport JWT
- bcrypt
- Multer
- Nodemailer
- Express Validator
- CORS
- Morgan
- dotenv

### Tools

- Git
- GitHub
- VS Code
- npm
- Insomnia

---

## Project Structure

```bash
socialNetwork/
│
├── client/                 # Frontend source code
│   ├── src/                # React application source
│   ├── public/             # Public assets
│   ├── package.json        # Frontend dependencies and scripts
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Backend source code
│   ├── app.js              # Main server entry point
│   ├── package.json        # Backend dependencies and scripts
│   └── ...                 # Routes, controllers, models, middlewares
│
├── resources/              # Project resources
│
├── .gitignore
└── README.md
```

### ⚙️ Cài đặt

```bash id="3n1w2a"
# Clone project
git clone https://github.com/NAHao2401/socialNetwork.git

cd socialNetwork
```

### 1. Cài frontend

```bash id="v7x9kf"
cd client
npm install
```

### 2. Cài backend

```bash id="2z8hds"
cd ../server
npm install
```

---

## ▶️ Chạy dự án

### Chạy backend

```bash id="r3m0zd"
cd server
npm start
```

### Chạy frontend

```bash id="8y1kwe"
cd client
npm start
```

👉 Sau đó truy cập:

```
http://localhost:3000
```

---

## 📌 API

| Method | Endpoint      | Mô tả        |
| ------ | ------------- | ------------ |
| POST   | /api/auth     | Đăng nhập    |
| POST   | /api/register | Đăng ký      |
| GET    | /api/posts    | Lấy bài viết |
| POST   | /api/posts    | Tạo bài viết |

---

## 🤝 Đóng góp

1. Fork repo
2. Tạo branch mới (`feature/...`)
3. Commit code
4. Push lên GitHub
5. Tạo Pull Request

---
👨‍💻 Tác giả
```
Nguyễn Anh Hào
📧 Email: nahao2401@gmail.com
