"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove old 'timing' column if it exists
    await queryInterface.removeColumn('enquiries', 'timing').catch(() => {});
    // Add new 'trainingMode' column
    await queryInterface.addColumn('enquiries', 'trainingMode', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove 'trainingMode' column
    await queryInterface.removeColumn('enquiries', 'trainingMode');
    // Restore 'timing' column
    await queryInterface.addColumn('enquiries', 'timing', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
  },
};
