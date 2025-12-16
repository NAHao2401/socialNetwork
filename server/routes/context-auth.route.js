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

const {
  verifyLoginValidation,
  verifyLogin,
  blockLogin,
} = require("../middlewares/users/verifyLogin");

const decodeToken = require("../middlewares/auth/decodeToken");

const requireAuth = passport.authenticate("jwt", { session: false }, null); // Xác thực người dùng bằng JWT

router.get(
  "/context-data/primary",
  requireAuth,
  decodeToken,
  getAuthContextData
);
router.get(
  "/context-data/trusted",
  requireAuth,
  decodeToken,
  getTrustedAuthContextData
);
router.get(
  "/context-data/blocked",
  requireAuth,
  decodeToken,
  getBlockedAuthContextData
);
router.get("/user-preferences", requireAuth, decodeToken, getUserPreferences);

router.delete("/context-data/:contextId", requireAuth, deleteContextData);

router.patch(
  "/context-data/block/:contextId",
  requireAuth,
  blockContextAuthData
);
router.patch(
  "/context-data/unblock/:contextId",
  requireAuth,
  unblockContextAuthData
);

router.use(useragent.express()); // Sử dụng middleware useragent để phân tích thông tin user-agent

router.get("/verify", verifyEmailValidation, verifyEmail, addContextData);
router.get("/verify-login", verifyLoginValidation, verifyLogin);
router.get("/block-login", verifyLoginValidation, blockLogin);

module.exports = router;
