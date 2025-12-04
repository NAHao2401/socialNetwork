const { check, validationResult } = require("express-validator"); // Thư viện để xác thực dữ liệu
const User = require("../../models/user.model");
const path = require("path");
const fs = require("fs");

const addUserValidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .custom((value, { req }) => {
      switch (true) {
        case value.length === 1:
          throw new Error("Name must be at least 2 characters");
        case value.length > 20:
          throw new Error("Name must be at most 20 characters");
        default:
          return true;
      }
    })
    .trim(),
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error("Email already in use");
        }
      } catch (error) {
        throw error;
      }
    }),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  check("role").default("general"),
];

const addUserValidatorHandler = (req, res, next) => {
  const errors = validationResult(req); // Lấy kết quả xác thực
  const mappedErrors = errors.mapped(); // Chuyển đổi lỗi thành đối tượng dễ sử dụng

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    if (req.files && req.files.length > 0) {
      const { filename } = req.files[0];
      const filePath = path.join(
        __dirname,
        "../../../assets/avatars",
        filename
      );
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        }
        console.log("Deleted file:", filePath);
      });
    }
    res
      .status(400)
      .json({ errors: Object.values(mappedErrors).map((err) => err.msg) });
  }
};

module.exports = {
  addUserValidator,
  addUserValidatorHandler,
};
