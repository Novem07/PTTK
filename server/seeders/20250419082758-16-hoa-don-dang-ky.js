'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaHoaDon: `HD${i.toString().padStart(3, '0')}`,
        MaPhieuDangKy: `PDK${((i % 10) + 1).toString().padStart(3, '0')}`,
        Gia: faker.number.float({ min: 1000, max: 5000, precision: 0.01 }),
        SoLuongThiSinh: faker.number.int({ min: 1, max: 10 }),
        TroGia: faker.number.float({ min: 100, max: 500, precision: 0.01 }),
        TongTien: faker.number.float({ min: 1000, max: 5000, precision: 0.01 }),
        NgayLapHoaDon: faker.date.past(),
        PhuongThucThanhToan: faker.helpers.arrayElement(['Tiền mặt', 'Chuyển khoản', 'Thẻ tín dụng']),
        TrangThaiThanhToan: faker.helpers.arrayElement(['Đã thanh toán', 'Chưa thanh toán']),
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('HoaDonDangKy', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HoaDonDangKy', null, {});
  }
};
