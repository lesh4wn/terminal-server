"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn("Tickets", "type", {
      type: Sequelize.DataTypes.ENUM("SALE", "RETURN"),
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.removeColumn("Tickets", "type");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
