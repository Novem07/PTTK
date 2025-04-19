const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BaiThi', {
    MaBaiThi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    MaChungChi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'ChungChi',
        key: 'MaChungChi'
      }
    },
    MaPhieuDuThi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'PhieuDuThi',
        key: 'MaPhieuDuThi'
      }
    },
    MaDonVi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'DonViChamThi',
        key: 'MaDonVi'
      }
    }
  }, {
    sequelize,
    tableName: 'BaiThi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__BaiThi__3AF6F223D8B851DA",
        unique: true,
        fields: [
          { name: "MaBaiThi" },
        ]
      },
    ]
  });
};
