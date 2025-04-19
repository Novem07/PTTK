'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaQuyDinh: `QD${i.toString().padStart(3, '0')}`,
        TenQuyDinh: faker.lorem.words(3),
        NoiDung: faker.lorem.sentence(),
      });
    }

    await queryInterface.bulkInsert('QuyDinh', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QuyDinh', null, {});
  }
};
