const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, //Bắt buộc phải có không được để trống
    unique: true, //Phải là duy nhất không được trùng lặp
    trim: true, //Xóa khoảng trắng thừa ở đầu và cuối chuỗi
    minlength: 3,
    maxlength: 20,
    validate: {
      // Custom validator để kiểm tra định dạng username
      validator: function (value) {
        return /^[a-zA-Z0-9_]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid username!`,
    },
  },

  password: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        return value.length >= 6;
      },
      message: (props) => `Password must be at least 6 characters long!`,
    },
  },
  timestamps: true, // Tự động thêm trường createdAt và updatedAt
});

adminSchema.pre("save", async function (next) {
  const admin = this;
  if (!admin.isModified("password")) {
    // Chỉ băm mật khẩu nếu nó đã được thay đổi
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Admin", adminSchema);
