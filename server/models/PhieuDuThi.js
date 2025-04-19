const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PhieuDuThi', {
    MaPhieuDuThi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    SoBaoDanh: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NgayThi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    GioThi: {
      type: DataTypes.TIME,
      allowNull: true
    },
    SoLanGiaHanConLai: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TrangThaiPhieu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MaThiSinh: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'ThiSinh',
        key: 'MaThiSinh'
      }
    },
    MaChungChi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'ChungChi',
        key: 'MaChungChi'
      }
    },
    MaPhieuDangKy: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'PhieuDangKy',
        key: 'MaPhieuDangKy'
      }
    },
    NguoiTao: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'NhanVien',
        key: 'MaNhanVien'
      }
    },
    MaLichThi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'LichThi',
        key: 'MaLichThi'
      }
    }
  }, {
    sequelize,
    tableName: 'PhieuDuThi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PhieuDuT__E2330EDAD3B850DC",
        unique: true,
        fields: [
          { name: "MaPhieuDuThi" },
        ]
      },
    ]
  });
};
