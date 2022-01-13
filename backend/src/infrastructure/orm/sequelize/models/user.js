import Model from '../SequelizeModel';

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
      },
      {
        tableName: 'users',
        ...this.Meta.baseConfig,
        sequelize,
      },
    );
  }

  static associate(models) {
    
  }
};

export default User;
