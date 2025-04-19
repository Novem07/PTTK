'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaHoaDon: `HDGH${i.toString().padStart(3, '0')}`,
        MaPhieuGiaHan: `PGH${((i % 10) + 1).toString().padStart(3, '0')}`,
        TongTien: faker.number.float({ min: 1000, max: 5000, precision: 0.01 }),
        NgayLapHoaDon: faker.date.past(),
        PhuongThucThanhToan: faker.helpers.arrayElement(['Tiền mặt', 'Chuyển khoản', 'Thẻ tín dụng']),
        TrangThaiThanhToan: faker.helpers.arrayElement(['Đã thanh toán', 'Chưa thanh toán']),
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('HoaDonGiaHan', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HoaDonGiaHan', null, {});
  }
};
