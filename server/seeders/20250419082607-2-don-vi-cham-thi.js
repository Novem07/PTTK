'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaDonVi: `DV${i.toString().padStart(3, '0')}`,
        TenDonVi: `Đơn vị chấm thi ${i}`,
        SDT: '09' + faker.string.numeric(8),
        DiaChi: faker.location.streetAddress(),
        Email: faker.internet.email(),
      });
    }

    await queryInterface.bulkInsert('DonViChamThi', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DonViChamThi', null, {});
  }
};
