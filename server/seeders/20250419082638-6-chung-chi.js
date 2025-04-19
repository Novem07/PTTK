'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        MaChungChi: `CC${i.toString().padStart(3, '0')}`,
        TenChungChi: `Chứng chỉ ${i}`,
        MoTa: faker.lorem.sentence(),
        LoaiChungChi: faker.helpers.arrayElement(['Tin học', 'Ngoại ngữ']),
        ThoiHan: faker.number.int({ min: 6, max: 36 }),
        Gia: faker.number.int({ min: 300000, max: 1000000 }),
      });
    }

    await queryInterface.bulkInsert('ChungChi', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ChungChi', null, {});
  }
};
