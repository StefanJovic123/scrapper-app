import Model from '../SequelizeModel';

class Article extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
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
        },
      },
      {
        tableName: 'articles',
        ...this.Meta.baseConfig,
        sequelize,
      },
    );
  }

  static associate(models) {
    
  }
};

export default Article;
