const mongoose = require("mongoose");

const suspiciousLoginSchema = new mongoose.Schema( // Schema đăng nhập đáng ngờ
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    browser: {
      type: String,
      required: true,
    },
    platform: {
      // Nền tảng
      type: String,
      required: true,
    },
    os: {
      // Hệ điều hành (ví dụ: Windows 10, macOS Big Sur, v.v.)
      type: String,
      required: true,
    },
    device: {
      // Tên thiết bị (ví dụ: iPhone, Samsung Galaxy, v.v.)
      type: String,
      required: true,
    },
    deviceType: {
      // Loại thiết bị (máy tính để bàn, di động, máy tính bảng, v.v.)
      type: String,
      required: true,
    },
    unverifiedAttempts: {
      // Số lần đăng nhập không xác thực
      type: Number,
      default: 0,
    },
    isTrusted: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      // Tài khoản bị chặn do đăng nhập đáng ngờ
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuspiciousLogin", suspiciousLoginSchema);
