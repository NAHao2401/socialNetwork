const CryptoJS = require("crypto-js");

const key = process.env.CRYPTO_KEY; // Khóa bí mật cho AES

const iv = CryptoJS.lib.WordArray.random(16); // Khởi tạo vector ngẫu nhiên

const encryptData = (data) => {
  // Mã hóa dữ liệu
  return CryptoJS.AES.encrypt(data, key, {
    iv: iv,
  }).toString();
};

const decryptData = (encryptedData) => {
  // Giải mã dữ liệu
  return CryptoJS.AES.decrypt(encryptedData, key, {
    iv: iv,
  }).toString(CryptoJS.enc.Utf8);
};

module.exports = {
  encryptField: (value) => encryptData(value),
  decryptField: (value) => decryptData(value),
  encryptData,
  decryptData,
};
