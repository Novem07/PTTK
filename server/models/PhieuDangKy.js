const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PhieuDangKy', {
    MaPhieuDangKy: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    NgayDangKy: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TrangThaiPhieu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MaThanhToan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MaKhachHang: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'KhachHang',
        key: 'MaKhachHang'
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
    tableName: 'PhieuDangKy',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PhieuDan__009FE7315A4D8132",
        unique: true,
        fields: [
          { name: "MaPhieuDangKy" },
        ]
      },
    ]
  });
};
