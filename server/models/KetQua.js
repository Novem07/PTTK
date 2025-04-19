const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KetQua', {
    MaKetQua: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    DiemSo: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    NgayCham: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TrangThaiChungChi: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'KetQua',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__KetQua__D5B3102A242E8BCA",
        unique: true,
        fields: [
          { name: "MaKetQua" },
        ]
      },
    ]
  });
};
