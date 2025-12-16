const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Tắt chế độ strictQuery để tránh cảnh báo deprecation (Cho phép query theo field không có trong schema)
class Database {
  constructor(uri, options) {
    this.uri = uri; // Chuỗi kết nối đến cơ sở dữ liệu MongoDB
    this.options = options; // Tùy chọn cấu hình kết nối
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log(
        `Connected to database: ${mongoose.connection.db.databaseName}`
      );
    } catch (error) {
      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(
        `Disconnected from database: ${mongoose.connection.db.databaseName}`
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Database;
