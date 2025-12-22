"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('enquiries', {
      fields: ['email'],
      type: 'unique',
      name: 'enquiries_email_unique',
    });
    await queryInterface.addConstraint('enquiries', {
      fields: ['phone'],
      type: 'unique',
      name: 'enquiries_phone_unique',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('enquiries', 'enquiries_email_unique');
    await queryInterface.removeConstraint('enquiries', 'enquiries_phone_unique');
  },
};
