'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaLichThi: `LT${i.toString().padStart(3, '0')}`,
        NgayThi: faker.date.soon(),
        GioThi: faker.time.recent(),
        ThoiGianThi: faker.number.int({ min: 60, max: 180 }),
        SoChoTrong: faker.number.int({ min: 10, max: 50 }),
        MaChungChi: `CC${((i % 10) + 1).toString().padStart(3, '0')}`,
        MaPhongThi: `PT${((i % 10) + 1).toString().padStart(3, '0')}`,
        NguoiTao: `NV${((i % 10) + 1).toString().padStart(3, '0')}`,
      });
    }

    await queryInterface.bulkInsert('LichThi', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('LichThi', null, {});
  }
};
