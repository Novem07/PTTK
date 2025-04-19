'use strict';
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let nhanViens = [];
    for (let i = 0; i < 10; i++) {
      nhanViens.push({
        MaNhanVien: i + 1,
        HoTen: faker.person.fullName(),
        SDT: '09' + faker.string.numeric(8),

        Email: faker.internet.email(),
        VaiTro: faker.helpers.arrayElement(['Tiếp nhận', 'Kế Toán', 'Tổ chức thi', 'Nhập liệu', 'Coi thi']),
        MatKhau: '12345678',

      });
    }

    console.log("==> DỮ LIỆU NHÂN VIÊN:");
    console.log(nhanViens);

    await queryInterface.bulkInsert('NhanVien', nhanViens, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NhanVien', null, {});
  }
};
