'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaKetQua: `KQ${i.toString().padStart(3, '0')}`,
        DiemSo: faker.number.float({ min: 5, max: 10, precision: 0.01 }),
        NgayCham: faker.date.past(),
        TrangThaiChungChi: faker.helpers.arrayElement(['Đã nhận', 'Đã gửi']),
        MaChungChi: `CC${((i % 10) + 1).toString().padStart(3, '0')}`,
        MaPhieuDuThi: `PDT${((i % 10) + 1).toString().padStart(3, '0')}`,
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('KetQua', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('KetQua', null, {});
  }
};
