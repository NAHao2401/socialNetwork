const mongoose = require("mongoose");

const fs = require("fs"); // Để thao tác với hệ thống tệp
const path = require("path"); // Để xử lý đường dẫn tệp
const { promisify } = require("util"); // Để chuyển đổi callback-based functions thành Promise-based

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
    },
    fileUrl: {
      type: String,
      trim: true,
    },
    fileType: {
      type: String,
    },
    community: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

postSchema.index({ content: "text" });

postSchema.pre("remove", async function (next) {
  try {
    if (this.fileUrl) {
      const filename = path.basename(this.fileUrl); // Lấy tên tệp từ đường dẫn
      const deleteFilePromise = promisify(fs.unlink)(
        path.join(__dirname, "../assets/userFiles", filename)
      );
      await deleteFilePromise;
    }
    await this.model("Comment").deleteMany({ _id: this.comments }); // Xóa tất cả bình luận liên quan

    await this.model("Report").deleteOne({ post: this._id }); // Xóa báo cáo liên quan đến bài viết

    await this.model("User").updateMany(
      // Xóa bài viết khỏi danh sách đã lưu của người dùng
      {
        savedPosts: this._id,
      },
      {
        $pull: { savedPosts: this._id }, // Loại bỏ bài viết khỏi mảng savedPosts
      }
    );
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("Post", postSchema);
