"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Customers", [
      {
        firstName: "Leshawn",
        lastName: "Phillips",
        emailAddress: "lphillips@leonardusa.com",
        phoneNumber: "336-756-6030",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Neal",
        lastName: "Borad",
        emailAddress: "nborad@leonardusa.com",
        phoneNumber: "336-673-8343",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Customers", null, {});
  },
};
