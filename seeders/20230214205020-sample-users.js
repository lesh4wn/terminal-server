"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Users", [
      {
        firstName: "Leshawn",
        lastName: "Phillips",
        emailAddress: "lphillips@leonardusa.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Neal",
        lastName: "Borad",
        emailAddress: "nborad@leonardusa.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Justin",
        lastName: "Puckett",
        emailAddress: "jpuckett@leonardusa.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Users", null, {});
  },
};
