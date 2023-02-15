"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Locations",
      [
        {
          name: "MountAiry",
          displayName: "Mount Airy",
          streetAddress: "630 West Independence Blvd.",
          city: "Mount Airy",
          zipCode: 27030,
          state: "NC",
          country: "United States",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WinstonSalem",
          displayName: "Winston Salem",
          streetAddress: "630 West Independence Blvd.",
          city: "Mount Airy",
          zipCode: 27030,
          state: "NC",
          country: "United States",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Locations", null, {});
  },
};
