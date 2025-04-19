'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaPhieuDangKyGiaHan: `PDKGH${i.toString().padStart(3, '0')}`,
        TruongHop: faker.helpers.arrayElement(['Thường', 'Đặc biệt']),
        LichThiMoi: faker.date.soon(),
        NgayYeuCau: faker.date.past(),
        NgayXuLy: faker.date.past(),
        MaPhieuDuThi: `PDT${((i % 10) + 1).toString().padStart(3, '0')}`,
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('PhieuDangKyGiaHan', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhieuDangKyGiaHan', null, {});
  }
};
