"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Customers", "tickets", {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Customers", "tickets");
  },
};
