# 🌐 Social Network

> Ứng dụng mạng xã hội đơn giản cho phép người dùng kết nối, chia sẻ và tương tác.

---

## 📌 Giới thiệu

**Social Network** là một dự án fullstack mô phỏng mạng xã hội (giống Facebook mini), giúp người dùng:

* Đăng ký / đăng nhập tài khoản
* Tạo và quản lý bài viết
* Tương tác với người dùng khác

Dự án được xây dựng nhằm mục đích học tập và thực hành phát triển web fullstack.

---

## 🚀 Tính năng

* 👤 Đăng ký, đăng nhập người dùng
* 📝 Tạo / sửa / xoá bài viết
* ❤️ Like / 💬 Comment bài viết
* 🧑‍🤝‍🧑 Kết nối người dùng (friend / follow)
* 📄 Trang cá nhân

---

## 🛠️ Công nghệ sử dụng

* **Frontend:** (client)

  * HTML / CSS / JavaScript
* **Backend:** (server)

  * Node.js / Express
* **Database:**

  * MongoDB / MySQL (tuỳ project)
* **Khác:**

  * REST API
  * JWT Authentication

---

## 📁 Cấu trúc project

```bash id="qv3s7c"
socialNetwork/
│── client/        # Frontend
│── server/        # Backend
│── resources/     # Tài nguyên (images, docs...)
│── README.md
```

---

## ⚙️ Cài đặt

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
