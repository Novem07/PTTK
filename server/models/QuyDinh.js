const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuyDinh', {
    MaQuyDinh: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    TenQuyDinh: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NoiDung: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QuyDinh',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__QuyDinh__F79170499EECE648",
        unique: true,
        fields: [
          { name: "MaQuyDinh" },
        ]
      },
    ]
  });
};
