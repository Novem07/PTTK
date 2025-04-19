const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PhieuGiaHan', {
    MaPhieuGiaHan: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    NgayLapPhieu: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TrangThaiThanhToan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MaPhieuDangKyGiaHan: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'PhieuDangKyGiaHan',
        key: 'MaPhieuDangKyGiaHan'
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
    tableName: 'PhieuGiaHan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PhieuGia__FDE9FEDCAF8EBE0D",
        unique: true,
        fields: [
          { name: "MaPhieuGiaHan" },
        ]
      },
    ]
  });
};
