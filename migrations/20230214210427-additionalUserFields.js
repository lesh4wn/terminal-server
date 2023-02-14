"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn(
      "Users",
      "securityRole",
      {
        type: Sequelize.DataTypes.STRING,
      },
      "lastLogin",
      {
        type: Sequelize.DataTypes.DATE,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return [
      await queryInterface.removeColumn("Users", "securityRole"),
      await queryInterface.removeColumn("Users", "lastLogin"),
    ];
  },
};
