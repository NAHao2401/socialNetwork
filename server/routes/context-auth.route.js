const router = require("express").Router();
const passport = require("passport"); // Xử lý xác thực người dùng (Bạn là ai?)
const useragent = require("express-useragent"); // Thu thập thông tin thiết bị và trình duyệt (Bạn đang dùng cái gì để đăng nhập)

const {
  addContextData,
  getAuthContextData,
  getTrustedAuthContextData,
  getUserPreferences,
  getBlockedAuthContextData,
  deleteContextData,
  blockContextAuthData,
  unblockContextAuthData,
} = require("../controllers/auth.controller");

const {
  verifyEmail,
  verifyEmailValidation,
} = require("../middlewares/users/verifyEmail");
