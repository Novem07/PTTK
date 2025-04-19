'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaSaiSot: `SS${i.toString().padStart(3, '0')}`,
        NoiDung: faker.lorem.sentence(),
        MaBaiThi: `BT${((i % 10) + 1).toString().padStart(3, '0')}`,
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('SaiSotBaiThi', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SaiSotBaiThi', null, {});
  }
};
