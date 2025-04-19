const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PhongThi', {
    MaPhongThi: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    SoChoNgoi: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PhongThi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PhongThi__CE1240A35AFB9C85",
        unique: true,
        fields: [
          { name: "MaPhongThi" },
        ]
      },
    ]
  });
};
