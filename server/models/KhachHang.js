const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KhachHang', {
    MaKhachHang: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    SDT: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DiaChi: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DonVi: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KhachHang',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__KhachHan__88D2F0E5977AB5D4",
        unique: true,
        fields: [
          { name: "MaKhachHang" },
        ]
      },
    ]
  });
};
