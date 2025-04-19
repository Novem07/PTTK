const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NhanVien', {
    MaNhanVien: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    HoTen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SDT: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VaiTro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MatKhau: {
      type: DataTypes.CHAR(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NhanVien',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__NhanVien__77B2CA471054CEF0",
        unique: true,
        fields: [
          { name: "MaNhanVien" },
        ]
      },
    ]
  });
};
