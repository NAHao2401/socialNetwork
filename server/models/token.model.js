const mongoose = require("mongoose");
const { create } = require("./suspiciousLogin.model");

const tokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 6 * 60 * 60, // Token sẽ tự động hết hạn sau 6h
  },
});

module.exports = mongoose.model("Token", tokenSchema);
