'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaPhongThi: `PT${i.toString().padStart(3, '0')}`,
        SoChoNgoi: 30 + i * 5
      });
    }

    await queryInterface.bulkInsert('PhongThi', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhongThi', null, {});
  }
};
