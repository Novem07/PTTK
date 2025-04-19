'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaPhieuDangKy: `PDK${i.toString().padStart(3, '0')}`,
        NgayDangKy: faker.date.past(),
        TrangThaiPhieu: faker.helpers.arrayElement(['Chờ phát hành', 'Đã phát hành', 'Đã hủy']),
        MaThanhToan: `TT${i.toString().padStart(3, '0')}`,
        MaKhachHang: `KH${((i % 10) + 1).toString().padStart(3, '0')}`,
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('PhieuDangKy', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhieuDangKy', null, {});
  }
};
