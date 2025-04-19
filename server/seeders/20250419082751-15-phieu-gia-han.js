'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaPhieuGiaHan: `PGH${i.toString().padStart(3, '0')}`,
        NgayLapPhieu: faker.date.past(),
        TrangThaiThanhToan: faker.helpers.arrayElement(['Đã thanh toán', 'Chưa thanh toán']),
        MaPhieuDangKyGiaHan: `PDKGH${((i % 10) + 1).toString().padStart(3, '0')}`,
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('PhieuGiaHan', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhieuGiaHan', null, {});
  }
};
