'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaPhieuDuThi: `PDT${i.toString().padStart(3, '0')}`,
        SoBaoDanh: `SBD${i.toString().padStart(3, '0')}`,
        NgayThi: faker.date.soon(),
        GioThi: faker.time.recent(),
        SoLanGiaHanConLai: faker.number.int({ min: 0, max: 3 }),
        TrangThaiPhieu: faker.helpers.arrayElement(['Đang xử lý', 'Đã xử lý', 'Đã phát']),
        MaThiSinh: `TS${((i % 10) + 1).toString().padStart(3, '0')}`,
        MaChungChi: `CC${((i % 10) + 1).toString().padStart(3, '0')}`,
        MaPhieuDangKy: `PDK${((i % 10) + 1).toString().padStart(3, '0')}`,
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
        MaLichThi: `LT${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('PhieuDuThi', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhieuDuThi', null, {});
  }
};
