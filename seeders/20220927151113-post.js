'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      "id": 1,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": true,
      "CategoryId": 1,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Kitchen.jpg"
    },
    {
      "id": 2,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": true,
      "CategoryId": 1,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Fencing.jpg"
    },
    {
      "id": 3,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": true,
      "CategoryId": 1,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Fencing_2.jpg"
    },
    {
      "id": 4,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": true,
      "CategoryId": 2,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/photo_2021-05-12_16-42-40-2.jpg"
    },
    {
      "id": 5,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": true,
      "CategoryId": 2,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/photo_2021-05-12_16-42-40-4.jpg"
    },
    {
      "id": 6,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 2,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/photo_2021-05-12_16-42-40-1200x900.jpg"
    },
    {
      "id": 7,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 2,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/photo_2021-05-12_16-42-41-2.jpg"
    },
    {
      "id": 8,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 3,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/photo_2021-05-12_16-42-41-3-1200x900.jpg"
    },
    {
      "id": 9,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 3,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Flooring.jpg"
    },
    {
      "id": 10,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 4,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Jan-2021-4-1200x900.jpg"
    },
    {
      "id": 11,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 4,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Jan-2021-8.jpg"
    },
    {
      "id": 12,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 4,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Landscape-800x1067.jpg"
    },
    {
      "id": 13,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 5,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Jan-2021-9-800x1067.jpg"
    },
    {
      "id": 14,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 5,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Jan-2021-9-800x1067.jpg"
    },
    {
      "id": 15,
      "title": "Beautiful wardrope at South Yara",
      "content": "This is a long description of what the project is all about",
      "metaData": "This will be use for SEO Optimization",
      "status": true,
      "isCarousel": false,
      "CategoryId": 1,
      "createdAt": "2/2/2022",
      "updatedAt": "2/2/2022",
      "imageUrl": "https://melbourne-handyman.com.au/wp-content/uploads/2015/12/Jan-2021-10-800x1067.jpg"
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
