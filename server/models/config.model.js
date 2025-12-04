const mongoose = require("mongoose");

const configSchema = new mongoose.Schema(
  {
    usePerspectiveAPI: {
      // Sử dụng dịch vụ Perspective API để lọc nội dung xấu
      type: Boolean,
      required: true,
      default: false,
    },
    categoryFilteringServiceProvider: {
      // Nhà cung cấp dịch vụ lọc danh mục nội dung
      type: String,
      enum: ["TextRazor", "InterfaceAPI", "ClassifierAPI", "disabled"],
      default: "disabled",
      required: true,
    },
    categoryFilteringRequestTimeout: {
      // Thời gian chờ yêu cầu lọc danh mục nội dung (ms)
      type: Number,
      min: 5000,
      max: 500000,
      default: 30000,
      required: true,
    },
  },
  { validateBeforeSave: true }
);
module.exports = mongoose.model("Config", configSchema);
