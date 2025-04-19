'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaPhongThi: `PT${((i % 10) + 1).toString().padStart(3, '0')}`,
        MaNhanVien: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
        VaiTro: faker.helpers.arrayElement(['Giám thị chính', 'Giám thị phụ', 'Giám sát hành lang']),
      });
    }

    await queryInterface.bulkInsert('ChiTietCoiThi', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ChiTietCoiThi', null, {});
  }
};
