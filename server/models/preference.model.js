const mongoose = require("mongoose");

// Mô hình Preference để lưu trữ các tùy chọn cá nhân của người dùng
const preferenceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    enableContextBasedAuth: {
      // Bật/tắt xác thực dựa trên ngữ cảnh
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Preference", preferenceSchema);
