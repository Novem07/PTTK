const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HoaDonDangKy', {
    MaHoaDon: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    MaPhieuDangKy: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PhieuDangKy',
        key: 'MaPhieuDangKy'
      }
    },
    Gia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    SoLuongThiSinh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TroGia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
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
    tableName: 'HoaDonDangKy',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__HoaDonDa__83572F4823978CBC",
        unique: true,
        fields: [
          { name: "MaHoaDon" },
          { name: "MaPhieuDangKy" },
        ]
      },
    ]
  });
};
