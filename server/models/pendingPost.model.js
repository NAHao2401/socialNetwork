const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const pendingPostSchema = new mongoose.Schema(
  {
    content: {
      // Nội dung bài viết
      type: String,
      trim: true,
    },
    fileUrl: {
      // Đường dẫn tới tệp đính kèm
      type: String,
      trim: true,
    },
    fileType: {
      // Loại tệp đính kèm (ví dụ: 'image', 'video', 'document')
      type: String,
    },
    community: {
      // Cộng đồng mà bài viết đang chờ phê duyệt thuộc về
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
      required: true,
    },
    user: {
      // Người dùng đã tạo bài viết
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      // Trạng thái phê duyệt của bài viết
      type: String,
      enum: ["pending"],
      default: "pending",
    },
    confirmationToken: {
      // Mã xác nhận duy nhất cho bài viết
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

pendingPostSchema.pre("remove", async function (next) {
  try {
    if (this.fileUrl) {
      const filename = path.basename(this.fileUrl); // Lấy tên tệp từ đường dẫn
      const deleteFilePromise = promisify(fs.unlink)(
        path.join(__dirname, "../assets/userFiles", filename)
      );
      await deleteFilePromise;
    }
    next();
  } catch (err) {
    next(err);
  }
});

pendingPostSchema.pre("deleteMany", async function (next) {
  try {
    const pendingPosts = await this.model.find(this.getFilter()); // Lấy tất cả các bài viết đang chờ phê duyệt sẽ bị xóa
    for (const post of pendingPosts) {
      if (post.fileUrl) {
        const filename = path.basename(post.fileUrl);
        const deleteFilePromise = promisify(fs.unlink)(
          path.join(__dirname, "../assets/userFiles", filename)
        );
        await deleteFilePromise;
      }
    }
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("PendingPost", pendingPostSchema);
