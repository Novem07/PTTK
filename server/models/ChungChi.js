const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ChungChi', {
    MaChungChi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    TenChungChi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MoTa: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LoaiChungChi: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ThoiHan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Gia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ChungChi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ChungChi__BD2C8F397C93E80A",
        unique: true,
        fields: [
          { name: "MaChungChi" },
        ]
      },
    ]
  });
};
