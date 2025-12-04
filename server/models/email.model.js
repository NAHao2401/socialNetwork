const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  verificationCode: {
    // Mã xác minh
    type: String,
    required: true,
    unique: true,
  },
  messageId: {
    // ID của email đã gửi
    type: String,
    required: true,
  },
  for: {
    // Mục đích sử dụng email (ví dụ: 'registration', 'passwordReset')
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 1800, // Xóa tài liệu sau 30 phút
  },
});

module.exports = mongoose.model("Email", emailSchema);
