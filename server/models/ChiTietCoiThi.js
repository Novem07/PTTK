const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ChiTietCoiThi', {
    MaPhongThi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PhongThi',
        key: 'MaPhongThi'
      }
    },
    MaNhanVien: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'NhanVien',
        key: 'MaNhanVien'
      }
    },
    VaiTro: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ChiTietCoiThi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ChiTietC__A9696C074A6C7695",
        unique: true,
        fields: [
          { name: "MaPhongThi" },
          { name: "MaNhanVien" },
        ]
      },
    ]
  });
};
