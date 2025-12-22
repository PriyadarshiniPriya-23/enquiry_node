"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove old subjectId column
    await queryInterface.removeColumn('packages', 'subjectId');
    // Add new subjectIds column
    await queryInterface.addColumn('packages', 'subjectIds', {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true,
      defaultValue: [],
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove subjectIds column
    await queryInterface.removeColumn('packages', 'subjectIds');
    // Restore subjectId column
    await queryInterface.addColumn('packages', 'subjectId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
