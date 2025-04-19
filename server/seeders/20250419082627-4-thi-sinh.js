'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaThiSinh: `TS${i.toString().padStart(3, '0')}`,
        SDT: '09' + faker.string.numeric(8),
        Email: faker.internet.email(),
        DiaChi: faker.location.streetAddress(),
        MaKhachHang: `KH${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('ThiSinh', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ThiSinh', null, {});
  }
};
