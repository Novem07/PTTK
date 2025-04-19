'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaBaiThi: `BT${i.toString().padStart(3, '0')}`,
        MaChungChi: `CC${((i % 10) + 1).toString().padStart(3, '0')}`,
        MaPhieuDuThi: `PDT${((i % 10) + 1).toString().padStart(3, '0')}`,
        MaDonVi: `DV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('BaiThi', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BaiThi', null, {});
  }
};
