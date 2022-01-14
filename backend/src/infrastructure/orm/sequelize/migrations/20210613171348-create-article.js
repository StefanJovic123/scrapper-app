const { DB_TYPES: DataTypes } = require('../types');
const commonFields = require('../commonFields');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.ID,
      },
      imageUrl: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      subtitle: {
        type: DataTypes.STRING,
      },
      paragraphs: {
        type: DataTypes.LONGTEXT,
      },
      url: {
        type: DataTypes.STRING,
        unique: true,
        nullable: false,
      },
      ...commonFields
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('articles');
  }
};
