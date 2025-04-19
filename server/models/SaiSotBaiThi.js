const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SaiSotBaiThi', {
    MaSaiSot: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    NoiDung: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MaBaiThi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'BaiThi',
        key: 'MaBaiThi'
      }
    },
    NguoiTao: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'NhanVien',
        key: 'MaNhanVien'
      }
    }
  }, {
    sequelize,
    tableName: 'SaiSotBaiThi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SaiSotBa__85FE807CB7A59A68",
        unique: true,
        fields: [
          { name: "MaSaiSot" },
        ]
      },
    ]
  });
};
