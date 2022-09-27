'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Kitchen',
        createdAt: '12/12/2022',
        updatedAt: '2/2/2022'
      },
      {
        id: 2,
        name: 'Fence',
        createdAt: '12/12/2022',
        updatedAt: '2/2/2022'
      },
      {
        id: 3,
        name: 'Floor',
        createdAt: '12/12/2022',
        updatedAt: '2/2/2022'
      },
      {
        id: 4,
        name: 'Tile',
        createdAt: '12/12/2022',
        updatedAt: '2/2/2022'
      },
      {
        id: 5,
        name: 'Fence',
        createdAt: '12/12/2022',
        updatedAt: '2/2/2022'
      },
      {
        id: 6,
        name: 'Cabinet',
        createdAt: '12/12/2022',
        updatedAt: '2/2/2022'
      },
      {
        id: 7,
        name: 'Wardrobe',
        createdAt: '12/12/2022',
        updatedAt: '2/2/2022'
      },
      {
        id: 8,
        name: 'Paint',
        createdAt: '12/12/2022',
        updatedAt: '2/2/2022'
      }
    ], {});

    
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
