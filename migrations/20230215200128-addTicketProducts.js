"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn("Tickets", "products", {
      type: Sequelize.DataTypes.ARRAY(DataTypes.STRING),
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.removeColumn("Tickets", "products");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
