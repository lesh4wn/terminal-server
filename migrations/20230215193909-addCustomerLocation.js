"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn("Customers", "locationId", {
      type: Sequelize.DataTypes.INTEGER,
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.removeColumn("Customers", "locationId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
