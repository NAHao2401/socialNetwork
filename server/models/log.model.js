const mongoose = require("mongoose");
const {
  encryptField,
  decryptField,
  decryptData,
} = require("../utils/encryption.js");

const logSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  context: {
    // Lưu trữ thông tin ngữ cảnh đã mã hóa
    type: String,
    set: encryptField,
    get: decryptField,
  },
  message: {
    // Nội dung log
    type: String,
    required: true,
  },
  type: {
    // Loại log (ví dụ: 'error', 'info', 'warning')
    type: String,
    required: true,
  },
  level: {
    // Mức độ nghiêm trọng của log (ví dụ: 'low', 'medium', 'high')
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
    expires: 604800, // 7 days
  },
});

logSchema.methods.decryptContext = function () {
  // Phương thức để giải mã trường context
  return decryptData(this.context);
};

module.exports = mongoose.model("Log", logSchema);
