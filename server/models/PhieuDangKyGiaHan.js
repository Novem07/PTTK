const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PhieuDangKyGiaHan', {
    MaPhieuDangKyGiaHan: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    TruongHop: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LichThiMoi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NgayYeuCau: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    NgayXuLy: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MaPhieuDuThi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'PhieuDuThi',
        key: 'MaPhieuDuThi'
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
    tableName: 'PhieuDangKyGiaHan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PhieuDan__A72873285912B79A",
        unique: true,
        fields: [
          { name: "MaPhieuDangKyGiaHan" },
        ]
      },
    ]
  });
};
