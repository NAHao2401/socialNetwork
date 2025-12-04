const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String,
    },
    moderators: [
      // Danh sách các moderator của cộng đồng
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    members: [
      // Danh sách các thành viên của cộng đồng
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    bannedUsers: [
      // Danh sách các người dùng bị cấm trong cộng đồng
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    rules: [
      // Danh sách các quy tắc của cộng đồng
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rule",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

communitySchema.index({ name: "text" });
module.exports = mongoose.model("Community", communitySchema);
