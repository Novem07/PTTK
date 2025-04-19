const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LichThi', {
    MaLichThi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    NgayThi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    GioThi: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ThoiGianThi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SoChoTrong: {
      type: DataTypes.INTEGER,
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
    MaPhongThi: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'PhongThi',
        key: 'MaPhongThi'
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
    tableName: 'LichThi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__LichThi__147EF5CC3AEDAF58",
        unique: true,
        fields: [
          { name: "MaLichThi" },
        ]
      },
    ]
  });
};
