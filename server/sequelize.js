// sequelize.js
const { Sequelize } = require('sequelize');
const config = require('./config/config');

// Lấy cấu hình từ file config.js
const environment = process.env.NODE_ENV || 'development';
const configEnv = config[environment];

// Tạo kết nối Sequelize
const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  dialect: configEnv.dialect,
  logging: false,  // Tắt logging nếu không cần thiết
});

module.exports = sequelize;
