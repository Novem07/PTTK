const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThiSinh', {
    MaThiSinh: {
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
    MaKhachHang: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'KhachHang',
        key: 'MaKhachHang'
      }
    }
  }, {
    sequelize,
    tableName: 'ThiSinh',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ThiSinh__79323A99C86532AF",
        unique: true,
        fields: [
          { name: "MaThiSinh" },
        ]
      },
    ]
  });
};
