const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DonViChamThi', {
    MaDonVi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    TenDonVi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SDT: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DiaChi: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DonViChamThi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__DonViCha__DDA5A6CF78ACFB2D",
        unique: true,
        fields: [
          { name: "MaDonVi" },
        ]
      },
    ]
  });
};
