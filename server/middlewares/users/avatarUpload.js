const fs = require("fs"); // Để thao tác với hệ thống tệp

function avatarUpload(req, res, next) {
  const multer = require("multer"); // Để xử lý tải lên tệp
  const path = require("path"); // Để xử lý đường dẫn tệp
  const up_folder = path.join(__dirname, "../../assets/avatars");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Tạo thư mục nếu chưa tồn tại
      if (!fs.existsSync(up_folder)) {
        fs.mkdirSync(up_folder, { recursive: true });
      }
      cb(null, up_folder);
    },
    filename: (req, file, cb) => {
      // Đặt tên tệp duy nhất
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
  });

  const upload = multer({
    // Cấu hình multer
    storage: storage,
    limits: {
      fileSize: 20 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    },
  });

  upload.any()(req, res, (err) => {
    // Xử lý tải lên
    if (err) {
      res.status(500).json({
        success: false,
        message: "Error uploading avatar",
        error: err.message,
      });
    } else {
      next();
    }
  });
}

module.exports = avatarUpload;
