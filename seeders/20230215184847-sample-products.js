"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Products", [
      {
        sku: 10000,
        displayName: "Apple",
        quantity: 10,
        imageUrl:
          "https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg",
        price: 7.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sku: 30000,
        displayName: "Orange",
        quantity: 13,
        imageUrl:
          "https://media.istockphoto.com/id/494037460/photo/orange-fruit-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Podpyj2fviG76mCSsr3aR6O3t4o3LdkahTHSU0GBCmQ=",
        price: 7.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Products", null, {});
  },
};
