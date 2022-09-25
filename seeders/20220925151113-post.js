'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      title: 'John Doe',
      image_url: 'black',
      createdAt: '12/12/2022',
      updatedAt: '2/2/2022'
    },
    {
      title: 'John Doe',
      image_url: 'black',
      createdAt: '12/12/2022',
      updatedAt: '2/2/2022'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
