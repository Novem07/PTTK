const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HoaDonGiaHan', {
    MaHoaDon: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    MaPhieuGiaHan: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PhieuGiaHan',
        key: 'MaPhieuGiaHan'
      }
    },
    TongTien: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    NgayLapHoaDon: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PhuongThucThanhToan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TrangThaiThanhToan: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'HoaDonGiaHan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__HoaDonGi__5C804ED6F3279075",
        unique: true,
        fields: [
          { name: "MaHoaDon" },
          { name: "MaPhieuGiaHan" },
        ]
      },
    ]
  });
};
